$ curl 'http://lubimyczytac.pl/searcher/getsuggestions?phrase=Tam+ci+b%C4%99dzie+lepiej' -s | jsonlint
```

```json
[
  {
    "url": "http:\\/\\/lubimyczytac.pl\\/ksiazka\\/264290\\/tam-ci-bedzie-lepiej",
    "id": "264290",
    "title": "Tam ci b\\u0119dzie lepiej",
    "authors": [
      {
        "url": "http:\\/\\/lubimyczytac.pl\\/autor\\/31361\\/ryszard-cwirlej",
        "id": "31361",
        "fullname": "Ryszard \\u0106wirlej"
      }
    ],
    "category": "book",
    "cover": "http:\\/\\/s.lubimyczytac.pl\\/upload\\/books\\/264000\\/264290\\/412173-50x75.jpg",
    "rating": 130
  },
  {
    "url": "http:\\/\\/lubimyczytac.pl\\/ksiazka\\/264289\\/tam-ci-bedzie-lepiej",
    "id": "264289",
    "title": "Tam ci b\\u0119dzie lepiej",
    "authors": [],
    "category": "book",
    "cover": "http:\\/\\/s.lubimyczytac.pl\\/upload\\/default-book-50x75.jpg",
    "rating": 0
  }
]
```


$ curl 'http://lubimyczytac.pl/ksiazka/264290' -s | grep -E '<meta|<link|sBookDescriptionLong'
		<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
		<meta http-equiv="Content-Language" content="pl" />
		<meta name="Description" content="Poznań, początek 1924 roku. Mieszkańcami miasta wstrząsa fala brutalnych morderstw. Z rąk nieznanego sprawcy giną prostytutki. Śledztwo prowadzą komisarz Antoni Fischer oraz jego zastępca Albin Siewierski. Ten pierwszy to dystyngowany i elokwentny oficer n" />
		<meta name="Keywords" content="" />
				<meta name="google-site-verification" content="mJetwv1NM4QIfTB8l0pw3d1JeakCq5rIuiF-7rdQb3w" />
        <meta name="LC_app_ver" content="83e373cf5c21cd1216a520fdc6bf7838" />
		<meta name="all-apver" content="426076ebc703102e66f5722e4abf70b380eec15e" />
		<link rel="stylesheet" type="text/css" media="screen, print" href="http://s.lubimyczytac.pl/skins/lc/css/lc_all_skin_lc.min.css?2015100802" />
		<link rel="stylesheet" type="text/css" media="screen, print" href="http://lubimyczytac.pl/fonts/lc/_fonts.css?2015100802" />
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
				<link rel="stylesheet" type="text/css" media="screen" href="http://s.lubimyczytac.pl/skins/lc/css/special/skodawieszcodobre_lc.css?2015100802" />
		<link rel="shortcut icon" href="http://lubimyczytac.pl/?2015100802" />
		<link rel="icon" href="http://lubimyczytac.pl/" />
		<link rel="icon" href="http://s.lubimyczytac.pl/img/favicon/favicon.png?2015100802" class="linkSize32" />
		<link rel="icon" href="http://s.lubimyczytac.pl/img/favicon/favicon_64.png?20130204?2015100802" class="linkSize64" />
		<link href="https://plus.google.com/105558457714831840063" rel="publisher" />
			<meta http-equiv="imagetoolbar" content="no" />
			<meta name="MSSmartTagsPreventParsing" content="true" />
        <meta property="og:title" content="Tam ci będzie lepiej" />
        <meta property="og:type" content="books.book" />
        <meta property="og:url" content="http://lubimyczytac.pl/ksiazka/264290" />
        <meta property="fb:admins" content="1087316930" />
        <meta property="og:site_name" content="Lubimyczytać.pl" />
        <meta property="og:description" content="Poznań, początek 1924 roku. Mieszkańcami miasta wstrząsa fala brutalnych morderstw. Z rąk nieznanego sprawcy giną prostytutki. Śledztwo prowadzą komisarz Antoni Fischer oraz jego zastępca Albin Siewie..." />
        <meta property="og:image" content="http://s.lubimyczytac.pl/upload/books/264000/264290/412173-352x500.jpg" />        <meta property="books:isbn"                    content="9788379762972" />
        <meta property="books:rating:value"            content="7.63" />
        <meta property="books:rating:scale"            content="10" />
        <meta property="books:rating:normalized_value" content="0.76" />
        <meta property="books:author"                  content="http://lubimyczytac.pl/book/fbauthor?id=264290" />
			<link rel="canonical" href="http://lubimyczytac.pl/ksiazka/264290/tam-ci-bedzie-lepiej" />
			<meta itemprop="worstRating" content="1" />
            <meta itemprop="bestRating" content="10" />
			<div id="sBookDescriptionLong">Poznań, początek 1924 roku. Mieszkańcami miasta wstrząsa fala brutalnych morderstw. Z rąk nieznanego sprawcy giną prostytutki. Śledztwo prowadzą komisarz Antoni Fischer oraz jego zastępca Albin Siewierski. Ten pierwszy to dystyngowany i elokwentny oficer najpierw pruskiej, a potem polskiej armii, przystojny trzydziestokilkulatek, znany ze swojego roztropnego i przemyślanego działania, ponad wszystko ceniący sobie poznański sznyt. Ten drugi to pochodzący z Kongresówki jegomość, dla którego najważniejsze są szybkie efekty pracy, blichtr i brylantyna. I choć reprezentują zupełnie inne wartości, muszą połączyć siły, żeby złapać bezwzględnego zabójcę.<br />