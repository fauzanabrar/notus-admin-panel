export const MOCK_DATA_THEAD = [
  "Nama Kegiatan",
  "Tempat Kegiatan",
  "Tanggal",
  "Yang Mengundang",
  "Yang Menugaskan",
  "Link",
]

export const MOCK_DATA = [
  {
    eventName: 'Seminar Nasional Teknologi Informasi',
    eventLocation: 'Gedung Serba Guna Universitas XYZ',
    eventStartDate: '2023-06-15 08:00',
    eventEndDate: '2023-06-15 16:00',
    invitedBy: 'Dekan Fakultas Teknik Universitas XYZ',
    eventLink: 'https://www.example.com/seminar',
    eventDescription: 'Seminar nasional tentang teknologi informasi.',
    eventFile: null,
  },
  {
    eventName: 'Rapat Koordinasi Program Studi',
    eventLocation: 'Ruang Rapat Program Studi Teknik Informatika',
    eventStartDate: '2023-06-18 13:00',
    eventEndDate: '2023-06-18 15:00',
    invitedBy: 'Ketua Program Studi Teknik Informatika',
    eventLink: '',
    eventDescription: 'Rapat koordinasi untuk membahas program studi.',
    eventFile: null,
  },
  {
    eventName: 'Sosialisasi Kebijakan Akademik',
    eventLocation: 'Aula Utama Universitas XYZ',
    eventStartDate: '2023-06-21 10:00',
    eventEndDate: '2023-06-21 12:00',
    invitedBy: 'Wakil Dekan 1 Bidang Akademik',
    eventLink: 'https://www.example.com/sosialisasi',
    eventDescription: 'Sosialisasi kebijakan akademik kepada dosen dan mahasiswa.',
    eventFile: null,
  },
  {
    eventName: 'Sosialisasi Kebijakan Akademik',
    eventLocation: 'Aula Utama Universitas XYZ',
    eventStartDate: '2023-06-21 10:00',
    eventEndDate: '2023-06-21 12:00',
    invitedBy: 'Wakil Dekan 1 Bidang Akademik',
    eventLink: 'https://www.example.com/sosialisasi',
    eventDescription: 'Sosialisasi kebijakan akademik kepada dosen dan mahasiswa.',
    eventFile: null,
  },
  {
    eventName: 'Sosialisasi Kebijakan Akademik',
    eventLocation: 'Aula Utama Universitas XYZ',
    eventStartDate: '2023-06-21 10:00',
    eventEndDate: '2023-06-21 12:00',
    invitedBy: 'Wakil Dekan 1 Bidang Akademik',
    eventLink: 'https://www.example.com/sosialisasi',
    eventDescription: 'Sosialisasi kebijakan akademik kepada dosen dan mahasiswa.',
    eventFile: null,
  },
  {
    eventName: 'Sosialisasi Kebijakan Akademik',
    eventLocation: 'Aula Utama Universitas XYZ',
    eventStartDate: '2023-06-21 10:00',
    eventEndDate: '2023-06-21 12:00',
    invitedBy: 'Wakil Dekan 1 Bidang Akademik',
    eventLink: 'https://www.example.com/sosialisasi',
    eventDescription: 'Sosialisasi kebijakan akademik kepada dosen dan mahasiswa.',
    eventFile: null,
  },
  {
    eventName: 'Sosialisasi Kebijakan Akademik',
    eventLocation: 'Aula Utama Universitas XYZ',
    eventStartDate: '2023-06-21 10:00',
    eventEndDate: '2023-06-21 12:00',
    invitedBy: 'Wakil Dekan 1 Bidang Akademik',
    eventLink: 'https://www.example.com/sosialisasi',
    eventDescription: 'Sosialisasi kebijakan akademik kepada dosen dan mahasiswa.',
    eventFile: null,
  },
  {
    eventName: 'Sosialisasi Kebijakan Akademik',
    eventLocation: 'Aula Utama Universitas XYZ',
    eventStartDate: '2023-06-21 10:00',
    eventEndDate: '2023-06-21 12:00',
    invitedBy: 'Wakil Dekan 1 Bidang Akademik',
    eventLink: 'https://www.example.com/sosialisasi',
    eventDescription: 'Sosialisasi kebijakan akademik kepada dosen dan mahasiswa.',
    eventFile: null,
  },
  {
    eventName: 'Sosialisasi Kebijakan Akademik',
    eventLocation: 'Aula Utama Universitas XYZ',
    eventStartDate: '2023-06-21 10:00',
    eventEndDate: '2023-06-21 12:00',
    invitedBy: 'Wakil Dekan 1 Bidang Akademik',
    eventLink: 'https://www.example.com/sosialisasi',
    eventDescription: 'Sosialisasi kebijakan akademik kepada dosen dan mahasiswa.',
    eventFile: null,
  },
  {
    eventName: 'Sosialisasi Kebijakan Akademik',
    eventLocation: 'Aula Utama Universitas XYZ',
    eventStartDate: '2023-06-21 10:00',
    eventEndDate: '2023-06-21 12:00',
    invitedBy: 'Wakil Dekan 1 Bidang Akademik',
    eventLink: 'https://www.example.com/sosialisasi',
    eventDescription: 'Sosialisasi kebijakan akademik kepada dosen dan mahasiswa.',
    eventFile: null,
  },
];

// // Generate random schedule data
// const generateRandomSchedule = () => {
//   const eventNames = [
//     'Seminar Nasional',
//     'Rapat Koordinasi',
//     'Kuliah Umum',
//     'Pelatihan',
//     'Workshop',
//   ];
//   const locations = [
//     'Gedung Serba Guna',
//     'Ruang Rapat',
//     'Aula Utama',
//     'Laboratorium',
//     'Ruang Kelas',
//   ];
//   const invitedByList = [
//     'Dekan',
//     'Wakil Dekan 1',
//     'Wakil Dekan 2',
//     'Ketua Program Studi',
//     'Ketua Jurusan',
//   ];
//   const randomIndex = Math.floor(Math.random() * eventNames.length);
//   const eventName = eventNames[randomIndex];
//   const eventLocation = locations[randomIndex];
//   const eventStartDate = generateRandomDateTime();
//   const eventEndDate = generateRandomDateTime(eventStartDate);
//   const invitedBy = invitedByList[randomIndex];
//   const eventLink = `https://www.example.com/${eventName.replace(/\s+/g, '-').toLowerCase()}`;
//   const eventDescription = `Ini adalah ${eventName.toLowerCase()} yang diadakan oleh ${invitedBy.toLowerCase()}.`;
  
//   return {
//     eventName,
//     eventLocation,
//     eventStartDate,
//     eventEndDate,
//     invitedBy,
//     eventLink,
//     eventDescription,
//     eventFile: null,
//   };
// };

// // Generate random date and time in ISO 8601 format
// const generateRandomDateTime = (startDate = new Date()) => {
//   const randomOffset = Math.floor(Math.random() * 7) + 1; // Random number between 1 and 7
//   const offsetDate = new Date(startDate);
//   offsetDate.setDate(offsetDate.getDate() + randomOffset);
//   const hours = Math.floor(Math.random() * 12) + 1; // Random number between 1 and 12
//   const minutes = Math.floor(Math.random() * 60);
//   const ampm = Math.random() < 0.5 ? 'AM' : 'PM';
//   const formattedDate = offsetDate.toISOString().split('T')[0];
//   const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  
//   return `${formattedDate} ${formattedTime}`;
// };

// // Generate additional random data until reaching 15 items
// while (MOCK_DATA.length < 15) {
//   MOCK_DATA.push(generateRandomSchedule());
// }
export const MOCK_DATA_PIMPINAN = [
  {
    id: 'dekan',
    nip: '123456',
    nama: 'Dekan',
    jabatan: 'Dekan Fakultas',
    username: 'dekan123'
  },
  {
    id: 'wd1',
    nip: '234567',
    nama: 'Wakil Dekan 1',
    jabatan: 'Wakil Dekan Fakultas',
    username: 'wd1'
  },
  {
    id: 'wd2',
    nip: '345678',
    nama: 'Wakil Dekan 2',
    jabatan: 'Wakil Dekan Fakultas',
    username: 'wd2'
  },
  {
    id: 'wd3',
    nip: '456789',
    nama: 'Wakil Dekan 3',
    jabatan: 'Wakil Dekan Fakultas',
    username: 'wd3'
  }
];
