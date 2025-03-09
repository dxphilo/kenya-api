export interface PublicHospital {
    name: string;
    location: string;
    region: string;
    level: number;
    bedCapacity: number | string; // Number where known, string for "Unknown"
    specialties: string;
}

export const publicHospitals: PublicHospital[] = [
    // Level 6: National Referral Hospitals
    {
        name: 'Kenyatta National Hospital',
        location: 'Nairobi County',
        region: 'Nairobi',
        level: 6,
        bedCapacity: 1800,
        specialties:
            'Cancer treatment, kidney dialysis, general surgery, teaching hospital'
    },
    {
        name: 'Moi Teaching and Referral Hospital',
        location: 'Uasin Gishu County',
        region: 'Rift Valley',
        level: 6,
        bedCapacity: 'Unknown',
        specialties:
            'General surgery, teaching hospital, serves Western Kenya and neighboring countries'
    },
    {
        name: 'Kenyatta University Teaching, Referral, and Research Hospital',
        location: 'Nairobi County',
        region: 'Nairobi',
        level: 6,
        bedCapacity: 650,
        specialties:
            'Surgery, pediatrics, obstetrics, gynecology, psychiatry, cancer treatment'
    },
    {
        name: 'Mathari National Teaching and Referral Hospital',
        location: 'Nairobi County',
        region: 'Nairobi',
        level: 6,
        bedCapacity: 1500,
        specialties: 'Psychiatry, mental health, research'
    },
    {
        name: 'National Spinal Injury Referral Hospital',
        location: 'Nairobi County',
        region: 'Nairobi',
        level: 6,
        bedCapacity: 'Unknown',
        specialties:
            'Spinal cord injuries, nerve system treatment, head injuries'
    },
    {
        name: 'Nakuru Level 6 Hospital',
        location: 'Nakuru County',
        region: 'Rift Valley',
        level: 6,
        bedCapacity: 'Unknown',
        specialties: 'General medical services, serves surrounding counties'
    },
    {
        name: 'Kisii Teaching and Referral Hospital',
        location: 'Kisii County',
        region: 'Nyanza',
        level: 6,
        bedCapacity: 650,
        specialties:
            'General medical services, referral for Nyanza and South Rift Valley'
    },

    // Level 5: County Referral Hospitals
    {
        name: 'Mbagathi County Referral Hospital',
        location: 'Nairobi County',
        region: 'Nairobi',
        level: 5,
        bedCapacity: 'Unknown',
        specialties:
            'Maternal healthcare, dental care, VCT services, pediatrics, family planning'
    },
    {
        name: 'Mama Lucy Kibaki Hospital',
        location: 'Nairobi County',
        region: 'Nairobi',
        level: 5,
        bedCapacity: 700,
        specialties:
            'Maternal healthcare, pediatrics, laboratory services, dental care, renal healthcare'
    },
    {
        name: 'Pumwani Maternity Hospital',
        location: 'Nairobi County',
        region: 'Nairobi',
        level: 5,
        bedCapacity: 'Unknown',
        specialties: 'Maternity services, family planning, pediatrics'
    },
    {
        name: 'Mutuini Sub-District Hospital',
        location: 'Nairobi County',
        region: 'Nairobi',
        level: 5,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Vihiga County Referral Hospital',
        location: 'Vihiga County',
        region: 'Western Kenya',
        level: 5,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Kisumu District Hospital',
        location: 'Kisumu County',
        region: 'Nyanza',
        level: 5,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Jaramogi Oginga Odinga Referral Hospital',
        location: 'Kisumu County',
        region: 'Nyanza',
        level: 5,
        bedCapacity: 'Unknown',
        specialties: 'General medical services, largest referral in Nyanza'
    },
    {
        name: 'Migori County Referral Hospital',
        location: 'Migori County',
        region: 'Nyanza',
        level: 5,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Homa Bay County Referral Hospital',
        location: 'Homa Bay County',
        region: 'Nyanza',
        level: 5,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Siaya County Referral Hospital',
        location: 'Siaya County',
        region: 'Nyanza',
        level: 5,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },

    // Level 4: Sub-County Hospitals
    {
        name: 'Githunguri Level 4 Hospital',
        location: 'Kiambu County',
        region: 'Central Kenya',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Lari Level 4 Hospital',
        location: 'Kiambu County',
        region: 'Central Kenya',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Limuru Level 4 Hospital',
        location: 'Kiambu County',
        region: 'Central Kenya',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Kiambu Level 4 Hospital',
        location: 'Kiambu County',
        region: 'Central Kenya',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Kyuso Level 4 Hospital',
        location: 'Kitui County',
        region: 'Eastern Kenya',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Ikutha Level 4 Hospital',
        location: 'Kitui County',
        region: 'Eastern Kenya',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Katulani Level 4 Hospital',
        location: 'Kitui County',
        region: 'Eastern Kenya',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Migwani Level 4 Hospital',
        location: 'Kitui County',
        region: 'Eastern Kenya',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Tseikuru Level 4 Hospital',
        location: 'Kitui County',
        region: 'Eastern Kenya',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Pala Level 4 Hospital',
        location: 'Homa Bay County',
        region: 'Nyanza',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Ogonogo Sub-District Level 4 Hospital',
        location: 'Homa Bay County',
        region: 'Nyanza',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Nyabondo Mission Level 4 Hospital',
        location: 'Siaya County',
        region: 'Nyanza',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Lumumba Sub-County Hospital',
        location: 'Kisumu County',
        region: 'Nyanza',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Chulaimbo Hospital',
        location: 'Kisumu County',
        region: 'Nyanza',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    },
    {
        name: 'Fort Ternan Level 4 Hospital',
        location: 'Kericho County',
        region: 'Rift Valley',
        level: 4,
        bedCapacity: 'Unknown',
        specialties: 'General medical services'
    }
];
