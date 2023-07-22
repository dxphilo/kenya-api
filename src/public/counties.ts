export type County = {
    code: number;
    name: string;
    capital: string;
    contact: string;
    website: string;
    location: string;
    border: string[];
    area: string;
    Population: string;
    Agriculture?: string[];
    Mining?: string[];
    Tourism?: string[];
    Beaches?: string[];
    Farming?: string[];
    Livestock?: string[];
    Fishing?: string[];
    Trade?: string[];
    Education?: string[];
    Economy?: string[];
};

export const counties: County[] = [
    {
        code: 1,
        name: 'Mombasa',
        capital: 'Mombasa (City)',
        contact: 'esupport@mombasa.go.ke',
        website: 'https://eservices.mombasa.go.ke/site/',
        location: 'Coastal Kenya',
        border: ['Kilifi', 'Kwale', 'Indian Ocean'],
        area: '219 km2',
        Population: '939,370',
        Mining: ['Chrome ore', 'Cement', 'Salt', 'Sand']
    },
    {
        code: 2,
        name: 'Kwale',
        capital: 'Kwale',
        contact: '',
        website: '',
        location: 'Coastal Kenya',
        border: ['Mombasa', 'Kilifi', 'Taita Taveta'],
        area: '',
        Population: '',
        Mining: ['Titanium']
    },
    {
        code: 3,
        name: 'Kilifi',
        capital: 'Kilifi',
        contact: '',
        website: '',
        location: 'Coastal Kenya',
        border: ['Mombasa', 'Kwale', 'Tana River', 'Taita Taveta'],
        area: '',
        Population: '',
        Agriculture: ['Cashew nuts', 'Coconuts', 'Mangoes'],
        Tourism: ['Watamu', 'Malindi'],
        Beaches: ['Diani Beach']
    },
    {
        code: 4,
        name: 'Tana River',
        capital: 'Hola',
        contact: '',
        website: '',
        location: 'Coastal Kenya',
        border: ['Kilifi', 'Lamu', 'Garissa', 'Taita Taveta'],
        area: '',
        Population: '',
        Farming: ['Maize', 'Millet', 'Sorghum', 'Cowpeas', 'Green grams'],
        Livestock: ['Camels', 'Cattle', 'Goats', 'Sheep']
    },
    {
        code: 5,
        name: 'Lamu',
        capital: 'Lamu',
        contact: '',
        website: '',
        location: 'Coastal Kenya',
        border: ['Tana River', 'Indian Ocean'],
        area: '',
        Population: '',
        Fishing: ['Tuna', 'Marlin', 'Swordfish'],
        Tourism: ['Lamu Old Town', 'Lamu Fort', 'Takwa Ruins']
    },
    {
        code: 6,
        name: 'Taita Taveta',
        capital: 'Voi',
        contact: '',
        website: '',
        location: 'Coastal Kenya',
        border: ['Kwale', 'Kilifi', 'Tanzania'],
        area: '',
        Population: '',
        Agriculture: ['Fruits', 'Vegetables', 'Tea'],
        Mining: ['Gemstones'],
        Tourism: ['Taita Hills', 'Tsavo National Park']
    },
    {
        code: 7,
        name: 'Garissa',
        capital: 'Garissa',
        contact: '',
        website: '',
        location: 'North Eastern Kenya',
        border: ['Tana River', 'Isiolo', 'Wajir', 'Tanzania'],
        area: '',
        Population: '',
        Farming: ['Camels', 'Goats', 'Sheep'],
        Trade: ['Livestock markets'],
        Education: ['Garissa University College']
    },
    {
        code: 8,
        name: 'Wajir',
        capital: 'Wajir',
        contact: '',
        website: '',
        location: 'North Eastern Kenya',
        border: [
            'Mandera',
            'Garissa',
            'Isiolo',
            'Marsabit',
            'Tanzania',
            'Somalia',
            'Ethiopia'
        ],
        area: '',
        Population: '',
        Farming: ['Camels', 'Goats', 'Sheep'],
        Trade: ['Livestock markets'],
        Education: ['Wajir University']
    },
    {
        code: 9,
        name: 'Mandera',
        capital: 'Mandera',
        contact: '',
        website: '',
        location: 'North Eastern Kenya',
        border: ['Wajir', 'Marsabit', 'Ethiopia', 'Somalia'],
        area: '',
        Population: '',
        Farming: ['Camels', 'Goats', 'Sheep'],
        Trade: ['Livestock markets']
    },
    {
        code: 10,
        name: 'Marsabit',
        capital: 'Marsabit',
        contact: '',
        website: '',
        location: 'Eastern Kenya',
        border: ['Wajir', 'Isiolo', 'Samburu', 'Turkana', 'Ethiopia'],
        area: '',
        Population: '',
        Farming: ['Camels', 'Goats', 'Sheep'],
        Mining: ['Gypsum', 'Manganese', 'Copper', 'Limestone']
    },
    {
        code: 11,
        name: 'Isiolo',
        capital: 'Isiolo',
        contact: '',
        website: '',
        location: 'Eastern Kenya',
        border: [
            'Meru',
            'Samburu',
            'Marsabit',
            'Laikipia',
            'Garissa',
            'Tana River'
        ],
        area: '',
        Population: '',
        Farming: ['Camels', 'Goats', 'Sheep'],
        Tourism: ['Buffalo Springs Reserve', 'Shaba National Reserve']
    },
    {
        code: 12,
        name: 'Meru',
        capital: 'Meru',
        contact: '',
        website: '',
        location: 'Eastern Kenya',
        border: [
            'Tharaka Nithi',
            'Laikipia',
            'Isiolo',
            'Kirinyaga',
            'Embu',
            'Kitui',
            'Tana River'
        ],
        area: '',
        Population: '',
        Agriculture: [
            'Coffee',
            'Tea',
            'Miraa (Khat)',
            'Maize',
            'Beans',
            'Horticulture'
        ]
    },
    {
        code: 13,
        name: 'Tharaka Nithi',
        capital: 'Chuka',
        contact: '',
        website: '',
        location: 'Eastern Kenya',
        border: ['Meru', 'Embu', 'Kitui'],
        area: '',
        Population: '',
        Agriculture: ['Tea', 'Coffee', 'Horticulture', 'Maize', 'Beans']
    },
    {
        code: 14,
        name: 'Embu',
        capital: 'Embu',
        contact: '',
        website: '',
        location: 'Eastern Kenya',
        border: ['Tharaka Nithi', 'Meru', 'Kitui', 'Kirinyaga'],
        area: '',
        Population: '',
        Agriculture: ['Coffee', 'Tea', 'Horticulture', 'Maize', 'Beans']
    },
    {
        code: 15,
        name: 'Kitui',
        capital: 'Kitui',
        contact: '',
        website: '',
        location: 'Eastern Kenya',
        border: ['Makueni', 'Machakos', 'Tana River', 'Tharaka Nithi', 'Embu'],
        area: '',
        Population: '',
        Agriculture: [
            'Maize',
            'Beans',
            'Cowpeas',
            'Sorghum',
            'Green grams',
            'Poultry farming'
        ]
    },
    {
        code: 16,
        name: 'Machakos',
        capital: 'Machakos',
        contact: '',
        website: '',
        location: 'Eastern Kenya',
        border: ['Makueni', 'Kitui', 'Kajiado', 'Kiambu', 'Embu'],
        area: '',
        Population: '',
        Agriculture: [
            'Mangoes',
            'Oranges',
            'Maize',
            'Beans',
            'Cowpeas',
            'Green grams'
        ],
        Tourism: ["Machakos People's Park"]
    },
    {
        code: 17,
        name: 'Makueni',
        capital: 'Wote',
        contact: '',
        website: '',
        location: 'Eastern Kenya',
        border: ['Machakos', 'Kitui', 'Kajiado', 'Marsabit'],
        area: '',
        Population: '',
        Agriculture: [
            'Mangoes',
            'Oranges',
            'Maize',
            'Beans',
            'Cowpeas',
            'Green grams',
            'Livestock farming'
        ],
        Tourism: ['Makindu Sikh Temple', 'Thwane Hills']
    },
    {
        code: 18,
        name: 'Nyandarua',
        capital: 'Ol Kalou',
        contact: '',
        website: '',
        location: 'Central Kenya',
        border: ['Nakuru', 'Nyeri', "Murang'a", 'Laikipia'],
        area: '',
        Population: '',
        Agriculture: ['Potatoes', 'Vegetables', 'Dairy farming'],
        Tourism: ['Aberdare National Park', "Thomson's Falls"]
    },
    {
        code: 19,
        name: 'Nyeri',
        capital: 'Nyeri',
        contact: '',
        website: '',
        location: 'Central Kenya',
        border: ['Nyandarua', 'Laikipia', 'Kirinyaga', "Murang'a", 'Meru'],
        area: '',
        Population: '',
        Agriculture: [
            'Coffee',
            'Tea',
            'Dairy farming',
            'Potatoes',
            'Horticulture'
        ],
        Tourism: [
            'Aberdare National Park',
            'Mount Kenya National Park',
            'Baden-Powell Museum'
        ]
    },
    {
        code: 20,
        name: 'Kirinyaga',
        capital: 'Kerugoya/Kutus',
        contact: '',
        website: '',
        location: 'Central Kenya',
        border: ['Nyeri', "Murang'a", 'Embu'],
        area: '',
        Population: '',
        Agriculture: ['Rice', 'Coffee', 'Tea', 'Maize', 'Horticulture'],
        Tourism: ['Mount Kenya', 'Gathuthi Tea Factory']
    },
    {
        code: 21,
        name: "Murang'a",
        capital: "Murang'a",
        contact: '',
        website: '',
        location: 'Central Kenya',
        border: ['Kirinyaga', 'Nyeri', 'Nyandarua', 'Kiambu', 'Maragua'],
        area: '',
        Population: '',
        Agriculture: ['Coffee', 'Tea', 'Dairy farming', 'Fruit farming'],
        Tourism: ['Aberdare Ranges', 'Chinga Dam']
    },
    {
        code: 22,
        name: 'Kiambu',
        capital: 'Kiambu',
        contact: '',
        website: '',
        location: 'Central Kenya',
        border: ['Nairobi', "Murang'a", 'Nyandarua', 'Kajiado'],
        area: '',
        Population: '',
        Agriculture: [
            'Coffee',
            'Tea',
            'Horticulture',
            'Dairy farming',
            'Fruit farming'
        ],
        Tourism: ['Kiambu Forest', 'Karura Forest']
    },
    {
        code: 23,
        name: 'Turkana',
        capital: 'Lodwar',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: ['Samburu', 'West Pokot', 'Baringo', 'Uganda', 'South Sudan'],
        area: '',
        Population: '',
        Farming: ['Camels', 'Goats', 'Sheep'],
        Mining: ['Oil', 'Salt', 'Gold', 'Limestone']
    },
    {
        code: 24,
        name: 'West Pokot',
        capital: 'Kapenguria',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: ['Turkana', 'Baringo', 'Uganda'],
        area: '',
        Population: '',
        Farming: ['Camels', 'Goats', 'Sheep'],
        Mining: ['Gold']
    },
    {
        code: 25,
        name: 'Samburu',
        capital: 'Maralal',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: ['Isiolo', 'Laikipia', 'Baringo', 'Turkana', 'Uganda'],
        area: '',
        Population: '',
        Farming: ['Camels', 'Goats', 'Sheep'],
        Tourism: ['Samburu National Reserve', 'Buffalo Springs Reserve']
    },
    {
        code: 26,
        name: 'Trans Nzoia',
        capital: 'Kitale',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: [
            'Elgeyo Marakwet',
            'West Pokot',
            'Bungoma',
            'Uasin Gishu',
            'Kakamega'
        ],
        area: '',
        Population: '',
        Agriculture: ['Maize', 'Sugarcane', 'Dairy farming', 'Floriculture'],
        Tourism: ['Mt. Elgon National Park', 'Saiwa Swamp National Park']
    },
    {
        code: 27,
        name: 'Uasin Gishu',
        capital: 'Eldoret',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: [
            'Trans Nzoia',
            'Elgeyo Marakwet',
            'Nandi',
            'Kakamega',
            'Bungoma'
        ],
        area: '',
        Population: '',
        Agriculture: ['Maize', 'Wheat', 'Dairy farming'],
        Tourism: ['Eldoret Sports Club', 'Kesses Dam']
    },
    {
        code: 28,
        name: 'Elgeyo Marakwet',
        capital: 'Iten',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: ['West Pokot', 'Trans Nzoia', 'Baringo', 'Uasin Gishu'],
        area: '',
        Population: '',
        Agriculture: ['Maize', 'Beans', 'Dairy farming'],
        Tourism: ['Kerio Valley National Park', 'Rimoi National Reserve']
    },
    {
        code: 29,
        name: 'Nandi',
        capital: 'Kapsabet',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: ['Uasin Gishu', 'Kakamega', 'Vihiga', 'Kericho'],
        area: '',
        Population: '',
        Agriculture: ['Tea', 'Coffee', 'Maize', 'Sugarcane', 'Dairy farming'],
        Tourism: ['Nandi Hills', 'Kerio Valley']
    },
    {
        code: 30,
        name: 'Baringo',
        capital: 'Kabarnet',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: [
            'Elgeyo Marakwet',
            'West Pokot',
            'Turkana',
            'Samburu',
            'Laikipia',
            'Nakuru',
            'Uasin Gishu'
        ],
        area: '',
        Population: '',
        Farming: ['Camels', 'Goats', 'Sheep'],
        Tourism: ['Lake Baringo', 'Koibatek Springs']
    },
    {
        code: 31,
        name: 'Laikipia',
        capital: 'Rumuruti',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: ['Baringo', 'Samburu', 'Isiolo', 'Meru', 'Nyeri', 'Nyandarua'],
        area: '',
        Population: '',
        Farming: ['Dairy farming', 'Sugarcane', 'Wheat', 'Maize'],
        Tourism: ['Ol Pejeta Conservancy', 'Aberdare Ranges']
    },
    {
        code: 32,
        name: 'Nakuru',
        capital: 'Nakuru',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: [
            'Baringo',
            'Kajiado',
            'Kericho',
            'Bomet',
            'Kisumu',
            'Nyandarua'
        ],
        area: '',
        Population: '',
        Farming: ['Maize', 'Vegetables', 'Dairy farming', 'Floriculture'],
        Tourism: ['Lake Nakuru', 'Hyrax Hill Museum']
    },
    {
        code: 33,
        name: 'Narok',
        capital: 'Narok',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: ['Bomet', 'Kajiado', 'Nakuru', 'Kericho'],
        area: '',
        Population: '',
        Farming: ['Maize', 'Wheat', 'Sugarcane'],
        Tourism: ['Masai Mara National Reserve', 'Maasai Cultural Village']
    },
    {
        code: 34,
        name: 'Kajiado',
        capital: 'Kajiado',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: ['Narok', 'Nakuru', 'Kiambu', 'Tanzania'],
        area: '',
        Population: '',
        Farming: ['Maize', 'Beans', 'Peas', 'Livestock farming'],
        Tourism: ['Amboseli National Park', 'Ol Donyo Orok']
    },
    {
        code: 35,
        name: 'Kericho',
        capital: 'Kericho',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: ['Nakuru', 'Bomet', 'Nandi', 'Bungoma'],
        area: '',
        Population: '',
        Agriculture: ['Tea', 'Coffee', 'Maize', 'Vegetables', 'Dairy farming'],
        Tourism: ['Kericho Tea Plantations', 'Ainamoi Tea Factory']
    },
    {
        code: 36,
        name: 'Bomet',
        capital: 'Bomet',
        contact: '',
        website: '',
        location: 'Rift Valley Kenya',
        border: ['Kericho', 'Nakuru', 'Kisumu', 'Nyamira'],
        area: '',
        Population: '',
        Farming: ['Tea', 'Coffee', 'Maize', 'Vegetables', 'Dairy farming'],
        Tourism: ['Kipchoge Keino Stadium', 'Konoin Tea Factory']
    },
    {
        code: 37,
        name: 'Kakamega',
        capital: 'Kakamega',
        contact: '',
        website: '',
        location: 'Western Kenya',
        border: ['Bungoma', 'Vihiga', 'Nandi', 'Uganda'],
        area: '',
        Population: '',
        Farming: ['Sugarcane', 'Maize', 'Beans', 'Cassava', 'Dairy farming'],
        Tourism: ['Kakamega Forest', 'Crying Stone of Ilesi']
    },
    {
        code: 38,
        name: 'Vihiga',
        capital: 'Vihiga',
        contact: '',
        website: '',
        location: 'Western Kenya',
        border: ['Kakamega', 'Nandi', 'Siaya'],
        area: '',
        Population: '',
        Farming: ['Sugarcane', 'Maize', 'Dairy farming'],
        Tourism: ['Mumboha Village', 'Luanda Magere Stone']
    },
    {
        code: 39,
        name: 'Bungoma',
        capital: 'Bungoma',
        contact: '',
        website: '',
        location: 'Western Kenya',
        border: ['Kakamega', 'Trans Nzoia', 'Uganda'],
        area: '',
        Population: '',
        Agriculture: ['Maize', 'Sugarcane', 'Dairy farming'],
        Tourism: ['Chetambe Fort', 'Nabuyole Falls']
    },
    {
        code: 40,
        name: 'Busia',
        capital: 'Busia',
        contact: '',
        website: '',
        location: 'Western Kenya',
        border: ['Bungoma', 'Uganda'],
        area: '',
        Population: '',
        Farming: ['Maize', 'Beans', 'Sugarcane', 'Fish farming'],
        Tourism: ['Sio Port', 'Budalangi Wetland']
    },
    {
        code: 41,
        name: 'Siaya',
        capital: 'Siaya',
        contact: '',
        website: '',
        location: 'Nyanza Kenya',
        border: ['Vihiga', 'Kakamega', 'Kisumu'],
        area: '',
        Population: '',
        Agriculture: ['Maize', 'Sugarcane', 'Fishing'],
        Tourism: ['Ndanu Falls', 'Kit Mikayi']
    },
    {
        code: 42,
        name: 'Kisumu',
        capital: 'Kisumu',
        contact: '',
        website: '',
        location: 'Nyanza Kenya',
        border: ['Siaya', 'Vihiga', 'Kericho', 'Homa Bay', 'Nandi'],
        area: '',
        Population: '',
        Agriculture: ['Maize', 'Sugarcane', 'Fishing'],
        Tourism: ['Kisumu Impala Sanctuary', 'Dunga Hill Camp']
    },
    {
        code: 43,
        name: 'Homa Bay',
        capital: 'Homa Bay',
        contact: '',
        website: '',
        location: 'Nyanza Kenya',
        border: ['Kisumu', 'Migori'],
        area: '',
        Population: '',
        Farming: ['Maize', 'Sugarcane', 'Fishing'],
        Tourism: ['Ndere Island National Park', 'Ruma National Park']
    },
    {
        code: 44,
        name: 'Migori',
        capital: 'Migori',
        contact: '',
        website: '',
        location: 'Nyanza Kenya',
        border: ['Homa Bay', 'Kisii', 'Tanzania'],
        area: '',
        Population: '',
        Farming: ['Maize', 'Sugarcane', 'Fishing'],
        Tourism: ['Migori Hill', 'Maasai Mara']
    },
    {
        code: 45,
        name: 'Kisii',
        capital: 'Kisii',
        contact: '',
        website: '',
        location: 'Nyanza Kenya',
        border: ['Migori', 'Nyamira', 'Kericho', 'Bomet'],
        area: '',
        Population: '',
        Agriculture: ['Tea', 'Coffee', 'Bananas', 'Maize', 'Eucalyptus'],
        Tourism: ['Gusii Stadium', 'Tabaka Soapstone Carvings']
    },
    {
        code: 46,
        name: 'Nyamira',
        capital: 'Nyamira',
        contact: '',
        website: '',
        location: 'Nyanza Kenya',
        border: ['Kisii', 'Kericho', 'Bomet'],
        area: '',
        Population: '',
        Agriculture: ['Tea', 'Coffee', 'Bananas', 'Maize'],
        Tourism: ['Nyamira Hill', 'Kericho Tea Estate']
    },
    {
        code: 47,
        name: 'Nairobi',
        capital: 'Nairobi (City)',
        contact: '',
        website: '',
        location: 'Nairobi Kenya',
        border: ['Kajiado', 'Kiambu', 'Machakos'],
        area: '',
        Population: '',
        Economy: ['Finance', 'Manufacturing', 'Services', 'Technology'],
        Tourism: ['Nairobi National Park', 'David Sheldrick Wildlife Trust']
    },
    {
        code: 48,
        name: 'Diaspora',
        capital: 'Diaspora',
        contact: '',
        website: '',
        location: 'International',
        border: [],
        area: '',
        Population: ''
    },
    {
        code: 49,
        name: 'Prisons',
        capital: 'Prisons',
        contact: '',
        website: '',
        location: 'Prisons',
        border: [],
        area: '',
        Population: ''
    }
];
