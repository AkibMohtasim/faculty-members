const professors = [
  {
    name: 'Charles Severance',
    age: 61,
    nationality: 'American',
    img: `https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/edf8690432469fb182e4313a3ee7ef/Charles-Severance.jpeg`,
    salary: 800000,
    subject: 'Computing Education',
    id: 1
  },
  {
    name: 'David J. Malan',
    age: 42,
    nationality: 'American',
    img: `https://qph.fs.quoracdn.net/main-thumb-2237245-200-ryefiirfcsedoapzkqeeyjooemdnzesy.jpeg`,
    salary: 750000,
    subject: 'Computer Science',
    id: 2
  },
  {
    name: 'Walter Lewin',
    age: 85,
    nationality: 'Dutch',
    img: `https://www.insidehighered.com/sites/default/server_files/media/walterlewin.jpg`,
    salary: 600000,
    subject: 'Physics',
    id: 3
  },
  {
    name: 'Andrew Ng',
    age: 45,
    nationality: 'British-American',
    img: `https://assets-global.website-files.com/5de98c06bb83ab1e27fc1c95/5e360d28d9b52e90dcdd863a_Ng_Andrew.jpg`,
    salary: 780000,
    subject: 'Machine Learning',
    id: 4
  },
  {
    name: 'Gilbert Strang',
    age: 86,
    nationality: 'American',
    img: `https://lastfm.freetls.fastly.net/i/u/avatar170s/c81808f7391a4df1a51e920324d584cc`,
    salary: 600000,
    subject: 'Mathematics',
    id: 5
  },
  {
    name: 'Aswath Damodaran',
    age: 64,
    nationality: 'Indian',
    img: `https://www.stern.nyu.edu/faculty/static/photos/adamodar.jpg`,
    salary: 580000,
    subject: 'Finance',
    id: 6
  },
  {
    name: 'Adam Grant',
    age: 30,
    nationality: 'American',
    img: `https://pbs.twimg.com/profile_images/1427272847643316232/9CeNBJAr_400x400.jpg`,
    salary: 600000,
    subject: 'Psychology',
    id: 7
  },
  {
    name: 'Richard A. Muller',
    age: 77,
    nationality: 'American',
    img: `https://images.gr-assets.com/authors/1334141404p5/121688.jpg`,
    salary: 760000,
    subject: 'Physics',
    id: 8
  },
  {
    name: 'Randy Pausch',
    age: 60,
    nationality: 'American',
    img: `http://img.timeinc.net/time/2008/time_100_2008/randy_pausch.jpg`,
    salary: 640000,
    subject: 'Computer Science',
    id: 9
  },
  {
    name: 'Venki Ramakrishnan',
    age: 69,
    nationality: 'Indian',
    img: `https://apidyn.royalsociety.org/images/fellows/P29838-Venki-Ramakrishnan.jpg?width=275`,
    salary: 700000,
    subject: 'Chemistry',
    id: 10
  },
  {
    name: 'Michael Gr??tzel',
    age: 77,
    nationality: 'Swiss',
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuIa-rNtVZr13CS3ca1-ThfmiThOzkGB3Ow&usqp=CAU`,
    salary: 590000,
    subject: 'Photochemistry',
    id: 11
  },
  {
    name: 'Naomi Halas',
    age: 68,
    nationality: 'American',
    img: `https://cen.acs.org/is/image//content/dam/cen/98/9/WEB/09809-feature14-halas.jpg/?$responsive$&wid=1000&qlt=90,0&resMode=sharp2&crop=0,0,1200,859`,
    salary: 585000,
    subject: 'Biomedical Engineering',
    id: 12
  },
  {
    name: 'Chris Gerdes',
    age: 57,
    nationality: 'American',
    img: `https://www.speakerbookingagency.com/storage/celebrities/1549050686_chris-gerdes.jpg`,
    salary: 720000,
    subject: ' Mechanical Engineering',
    id: 13
  },
  {
    name: 'Daniel G. Nocera',
    age: 64,
    nationality: 'American',
    img: `https://cen.acs.org/content/dam/cen/92/web/20141223lnp2-nocera.jpg`,
    salary: 700000,
    subject: 'Chemical Biology',
    id: 14
  },
  {
    name: 'Jeffrey A. Hoffman',
    age: 76,
    nationality: 'American',
    img: `https://i2.wp.com/www.enlacejudio.com/wp-content/uploads/2020/12/Jeff-Hoffman.jpg?fit=470%2C278&quality=80&strip=all&ssl=1`,
    salary: 695000,
    subject: 'Aeronautics and Astronautics',
    id: 15
  },
  {
    name: 'Carlos Frenk',
    age: 69,
    nationality: 'Mexican-British',
    img: `https://apidyn.royalsociety.org/images/fellows/P25001-Carlos-Frenk.jpg?width=275`,
    salary: 885000,
    subject: 'Cosmology',
    id: 16
  },
  {
    name: 'Jack N. Rakove',
    age: 74,
    nationality: 'American',
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSkY-agY4fSPYvStGLJB9IV5pmEvYLvWXIYyUP7ySoICFWM19G6A6JVbAVeoZXaqs928&usqp=CAU`,
    salary: 590000,
    subject: 'History',
    id: 17
  },
  {
    name: 'Bruce Cumings',
    age: 78,
    nationality: 'American',
    img: `https://img.hani.co.kr/imgdb/resize/2012/1130/135417163987_20121130.JPG`,
    salary: 675000,
    subject: 'History',
    id: 18
  },
  {
    name: 'Steven Pinker',
    age: 67,
    nationality: 'Canadian-American',
    img: `https://images-na.ssl-images-amazon.com/images/I/71KBVKIQDyL._SX450_.jpg`,
    salary: 520000,
    subject: 'Psychology',
    id: 19
  },
  {
    name: 'Steven Strogatz',
    age: 62,
    nationality: 'American',
    img: `https://images.squarespace-cdn.com/content/v1/5436e695e4b07f1e91b30155/1549398633231-2X9Y41HB1736PAHZPU0K/steve.JPG`,
    salary: 500000,
    subject: 'Mathematics',
    id: 20
  },
  {
    name: 'Muriel M??dard',
    age: 61,
    nationality: 'American',
    img: `https://www.comsoc.org/sites/default/files/styles/400wide/public/images/2018-2018-08/muriel-medard-400x600.jpg?itok=KigndTld`,
    salary: 725000,
    subject: 'Electrical Engineering',
    id: 21
  },
  {
    name: 'Andrei Faraon',
    age: 43,
    nationality: 'American',
    img: `http://cloudfront.eas.caltech.edu/eas/engenious/10/faraon.jpg`,
    salary: 700000,
    subject: 'Photonics',
    id: 22
  },
]