import {
	type Request,
	type Response,
	Router,
	type RequestHandler,
} from "express";
import {
	commercialBanks,
	mortgageFinanceInstitutions,
	nonOperatingHoldingCompanies,
} from "../public/banks";

enum BankType {
	Commercial = "commercial",
	MortgageFinanceInstitution = "mortgage-finance-institution",
	NonOperatingHoldingCompany = "non-operating-holding-company",
}

const router = Router();

const banksData: RequestHandler = (req: Request, res: Response): void => {
	const bank_type = req.query.bank_type as BankType | undefined;
	const bank_name = (req.query.bank_name as string | undefined)?.toLowerCase();
	const ussd = (req.query.ussd as string | undefined)?.trim();
	const paybill = req.query.paybill ? Number(req.query.paybill) : undefined;

	let data: any[] = [];

	if (!bank_type) {
		data = [
			...commercialBanks,
			...mortgageFinanceInstitutions,
			...nonOperatingHoldingCompanies,
		];
	} else {
		switch (bank_type) {
			case BankType.Commercial:
				data = commercialBanks;
				break;
			case BankType.MortgageFinanceInstitution:
				data = mortgageFinanceInstitutions;
				break;
			case BankType.NonOperatingHoldingCompany:
				data = nonOperatingHoldingCompanies;
				break;
			default:
				res.status(400).json({ error: "Invalid bank type", status: 400 });
				return;
		}
	}

	if (bank_name || ussd || paybill) {
		const bankNameLower = bank_name?.toLowerCase();
		const normalize = (str: string) => str.replace(/[^0-9]/g, "");
		const ussdNormalized = ussd ? normalize(ussd) : undefined;

		data = data.filter((b) => {
			if (bankNameLower && !b.name?.toLowerCase().includes(bankNameLower)) {
				return false;
			}
			if (
				ussdNormalized &&
				(!b.ussd || !normalize(b.ussd).includes(ussdNormalized))
			) {
				return false;
			}
			if (paybill && b.payBill !== paybill) {
				return false;
			}
			return true;
		});
	}

	if (data.length === 0) {
		res.status(404).json({
			error: "No matching bank(s) found",
			query: { bank_type, bank_name, ussd, paybill },
			status: 404,
		});
		return;
	}

	res.status(200).json({
		data,
		count: data.length,
		status: 200,
	});
};

router.get("/", banksData);

export default router;
