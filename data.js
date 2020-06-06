var race_data = [
  {
    'name': 'Population in the US',
    'source': 'https://www.census.gov/quickfacts/fact/table/US/IPE120218',
    'statistics': {
      'black': 0.134*328239523,
      'white': 0.604*328239523,
      'asian': 0.059*328239523,
      'hispanic': 0.183*328239523
    }
  },
  {
    'name': '# Killed by Police',
    'source': 'https://mappingpoliceviolence.org/nationaltrends',
    'statistics': {
      'black': 259,
      'white': 406,
      'asian': 17,
      'hispanic': 182
    }
  },
  {
    'name': '# Unarmed, Killed by Police',
    'source': 'https://mappingpoliceviolence.org/nationaltrends',
    'statistics': {
      'black': 28,
      'white': 51,
      'asian': 2,
      'hispanic': 20
    }
  },    
  {
    'name': '# Arrested for All Crimes',
    'source': 'https://ucr.fbi.gov/crime-in-the-u.s/2018/crime-in-the-u.s.-2018/tables/table-43',
    'statistics': {
      'black': 2115381,
      'white': 5319654,
      'asian': 92737,
      'hispanic': 1191334
    }
  },
  {
    'name': '# Arrested for Violent Crimes',
    'source': 'https://ucr.fbi.gov/crime-in-the-u.s/2018/crime-in-the-u.s.-2018/tables/table-43',
    'statistics': {
      'black': 4778+5376+36187+100393,
      'white': 3953+12794+29025+184527,
      'asian': 94+289+641+5078,
      'hispanic': 1472+4090+12823+65056
    }
  },
  {
    'name': '# Below Poverty Line',
    'source': 'http://federalsafetynet.com/us-poverty-statistics.html',
    'statistics': {
      'black': 8900000,
      'white': 15700000,
      'asian': 2000000,
      'hispanic': 10500000
    }
  },

  {
    'name': '# Arrested for Murder',
    'source': 'https://ucr.fbi.gov/crime-in-the-u.s/2018/crime-in-the-u.s.-2018/tables/table-43',
    'statistics': {
      'black': 4778,
      'white': 3953,
      'asian': 94,
      'hispanic': 1472
    }
  }
]