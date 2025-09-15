import { Request, Response, Router } from "express";
import { commercialBanks, mortgageFinanceInstitutions, nonOperatingHoldingCompanies } from "../public/banks";

enum BankType {
    Commercial = "commercial",
    MortgageFinanceInstitution = "mortgage-finance-institution",
    NonOperatingHoldingCompany = "non-operating-holding-company",
}

const router = Router();


const banksData = (req: Request, res: Response) => {
    const bank_type = req.query.bank_type as BankType;

    if (!bank_type) {
        res.status(200).json({
            data: [...commercialBanks, ...mortgageFinanceInstitutions, ...nonOperatingHoldingCompanies],
            count: commercialBanks.length + mortgageFinanceInstitutions.length + nonOperatingHoldingCompanies.length,
            status: 200,
        });
        return;
    }

    switch (bank_type) {
        case BankType.Commercial:
            res.status(200).json({ data: commercialBanks, count: commercialBanks.length, status: 200 });
            break;
        case BankType.MortgageFinanceInstitution:
            res.status(200).json({ data: mortgageFinanceInstitutions, count: mortgageFinanceInstitutions.length, status: 200 });
            break;
        case BankType.NonOperatingHoldingCompany:
            res.status(200).json({ data: nonOperatingHoldingCompanies, count: nonOperatingHoldingCompanies.length, status: 200 });
            break;
        default:
            res.status(400).json({ error: "Invalid bank type", status: 400 });
    }
}
router.get("/", banksData);

export default router;