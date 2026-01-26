export interface University {
	name: string;
	location: string;
	established: number;
	website: string;
	focus: string;
}

export const publicUniversities: University[] = [
	{
		name: "University of Nairobi",
		location: "Nairobi",
		established: 1970,
		website: "https://www.uonbi.ac.ke",
		focus:
			"Oldest university in Kenya, renowned for research, medicine, and social sciences.",
	},
	{
		name: "Kenyatta University",
		location: "Kiambu",
		established: 1985,
		website: "https://www.ku.ac.ke",
		focus:
			"Leading in education programs, with a large library and international partnerships.",
	},
	{
		name: "Moi University",
		location: "Uasin Gishu",
		established: 1984,
		website: "https://www.mu.ac.ke",
		focus: "Known for forestry and technology programs, located in Eldoret.",
	},
	{
		name: "Egerton University",
		location: "Nakuru",
		established: 1987,
		website: "https://www.egerton.ac.ke",
		focus:
			"Specializes in agriculture and environmental studies, founded as a farm school in 1939.",
	},
	{
		name: "Maseno University",
		location: "Kisumu",
		established: 1991,
		website: "https://www.maseno.ac.ke",
		focus: "Strong in arts, sciences, and distance learning programs.",
	},
	{
		name: "Jomo Kenyatta University of Agriculture and Technology",
		location: "Kiambu",
		established: 1994,
		website: "https://www.jkuat.ac.ke",
		focus: "Focuses on agriculture, engineering, and technology innovation.",
	},
	{
		name: "Dedan Kimathi University of Technology",
		location: "Nyeri",
		established: 2012,
		website: "https://www.dkut.ac.ke",
		focus:
			"Technology and engineering hub, with a science and technology park.",
	},
	{
		name: "Technical University of Kenya",
		location: "Nairobi",
		established: 2013,
		website: "https://www.tukenya.ac.ke",
		focus: "Technical education, evolved from Kenya Polytechnic.",
	},
	{
		name: "Technical University of Mombasa",
		location: "Mombasa",
		established: 2013,
		website: "https://www.tum.ac.ke",
		focus: "Technical and vocational training, coastal region focus.",
	},
	{
		name: "Pwani University",
		location: "Kilifi",
		established: 2013,
		website: "https://www.pu.ac.ke",
		focus: "Marine and environmental sciences, located on the Kenyan coast.",
	},
	{
		name: "Kisii University",
		location: "Kisii",
		established: 2013,
		website: "https://www.kisiiuniversity.ac.ke",
		focus: "Education and social sciences, serving the Gusii community.",
	},
	{
		name: "Masinde Muliro University of Science and Technology",
		location: "Kakamega",
		established: 2007,
		website: "https://www.mmust.ac.ke",
		focus: "Science and technology, with a focus on Western Kenya development.",
	},
	{
		name: "South Eastern Kenya University",
		location: "Kitui",
		established: 2013,
		website: "https://www.seku.ac.ke",
		focus: "Dryland agriculture and environmental studies.",
	},
	{
		name: "University of Eldoret",
		location: "Uasin Gishu",
		established: 2013,
		website: "https://www.uoeld.ac.ke",
		focus:
			"Agricultural sciences and education, formerly a Moi University campus.",
	},
	{
		name: "Chuka University",
		location: "Tharaka-Nithi",
		established: 2013,
		website: "https://www.chuka.ac.ke",
		focus: "Education and business programs, located near Mount Kenya.",
	},
	{
		name: "Laikipia University",
		location: "Laikipia",
		established: 2013,
		website: "https://www.laikipia.ac.ke",
		focus: "Education and community development, serving pastoralist regions.",
	},
	{
		name: "Meru University of Science and Technology",
		location: "Meru",
		established: 2013,
		website: "https://www.must.ac.ke",
		focus: "Science, technology, and agriculture in the Meru region.",
	},
	{
		name: "Multimedia University of Kenya",
		location: "Nairobi",
		established: 2013,
		website: "https://www.mmu.ac.ke",
		focus: "Media, communication, and IT programs.",
	},
	{
		name: "University of Kabianga",
		location: "Kericho",
		established: 2013,
		website: "https://www.kabianga.ac.ke",
		focus: "Education and environmental sciences, located in tea country.",
	},
	{
		name: "Karatina University",
		location: "Nyeri",
		established: 2013,
		website: "https://www.karu.ac.ke",
		focus: "Agricultural and education programs, near Mount Kenya.",
	},
	{
		name: "Kirinyaga University",
		location: "Kirinyaga",
		established: 2016,
		website: "https://www.kyu.ac.ke",
		focus: "Technology and business, supporting Kirinyaga’s economic growth.",
	},
	{
		name: "Machakos University",
		location: "Machakos",
		established: 2013,
		website: "https://www.mksu.ac.ke",
		focus: "Education and engineering, serving the Machakos region.",
	},
	{
		name: "University of Embu",
		location: "Embu",
		established: 2013,
		website: "https://www.embuni.ac.ke",
		focus: "Agricultural sciences and education, located in Embu County.",
	},
	{
		name: "Rongo University",
		location: "Migori",
		established: 2016,
		website: "https://www.rongovarsity.ac.ke",
		focus: "Education and social sciences, serving the Lake Victoria region.",
	},
	{
		name: "Taita Taveta University",
		location: "Taita/Taveta",
		established: 2016,
		website: "https://www.ttu.ac.ke",
		focus:
			"Mining and environmental technology, located in a mineral-rich area.",
	},
	{
		name: "Alupe University",
		location: "Busia",
		established: 2017,
		website: "https://www.auc.ac.ke",
		focus: "Science and education, one of the newest public universities.",
	},
	{
		name: "Garissa University",
		location: "Garissa",
		established: 2016,
		website: "https://www.garissauniversity.ac.ke",
		focus: "Education and peace studies, serving the North Eastern region.",
	},
	{
		name: "Tharaka University",
		location: "Tharaka-Nithi",
		established: 2017,
		website: "https://www.tharaka.ac.ke",
		focus: "Agricultural technology and education, near Chuka University.",
	},
	{
		name: "Murang’a University of Technology",
		location: "Murang’a",
		established: 2016,
		website: "https://www.mut.ac.ke",
		focus: "Technology and innovation, supporting Murang’a’s development.",
	},
	{
		name: "University of Turkana",
		location: "Turkana",
		established: 2017,
		website: "https://www.turkanauniversity.ac.ke",
		focus:
			"Arid land studies and education, addressing Turkana’s unique needs.",
	},
	{
		name: "Bomet University College",
		location: "Bomet",
		established: 2017,
		website: "https://www.buc.ac.ke",
		focus: "Environmental sciences, affiliated with Moi University.",
	},
	{
		name: "Kaimosi Friends University College",
		location: "Vihiga",
		established: 2015,
		website: "https://www.kafuco.ac.ke",
		focus:
			"Education and technology, affiliated with Masinde Muliro University.",
	},
	{
		name: "Tom Mboya University College",
		location: "Homa Bay",
		established: 2016,
		website: "https://www.tmuc.ac.ke",
		focus: "Education and social sciences, affiliated with Maseno University.",
	},
	{
		name: "Co-operative University of Kenya",
		location: "Nairobi",
		established: 2016,
		website: "https://www.cuk.ac.ke",
		focus: "Co-operative management and business studies.",
	},
	{
		name: "Lukenya University",
		location: "Machakos",
		established: 2015,
		website: "https://www.lukenyauniversity.ac.ke",
		focus:
			"Agricultural and environmental studies, affiliated with University of Nairobi.",
	},
	{
		name: "University of Nairobi School of Physical Sciences",
		location: "Nairobi",
		established: 1970,
		website: "https://physicalsciences.uonbi.ac.ke",
		focus:
			"Part of UoN, specializing in physics, chemistry, and related sciences.",
	},
	{
		name: "Kenya Medical Training College University",
		location: "Nairobi",
		established: 2023,
		website: "https://www.kmtc.ac.ke",
		focus:
			"Medical training and health sciences, recently upgraded to university status.",
	},
	{
		name: "Maasai Mara University",
		location: "Narok",
		established: 2013,
		website: "https://www.mmarau.ac.ke",
		focus: "Environmental studies and tourism, near the Maasai Mara reserve.",
	},
	{
		name: "Catholic University of Eastern Africa",
		location: "Nairobi",
		established: 1992,
		website: "https://www.cuea.edu",
		focus:
			"Theology and social sciences, public status debated (often listed as private).",
	},
];
