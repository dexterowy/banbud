import React from 'react';
import Helmet from 'react-helmet';


const Head = () => (
    <Helmet>
        <link href = "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600&display=swap&subset=latin-ext"
        rel = "stylesheet"/>
        <title>Banbud - usługi budowlane</title>
        <meta name="description" content="Banbud to młoda firma budowlana prężnie rozwijająca się na rynku. Nasz zespół liczy kilkunastu robotników oraz cały szereg maszyn, wykorzystywanych przez nas do szybkiej i rzetelnej pracy.  Każdy z nas wykonuje swoje zadania pieczołowicie i konkretnie, dzięki czemu wybierając nas jako realizatorów twojego zlecenia z pewnością nie będziesz zawiedziony rezultatem." />
        <meta property="og:title" content="BanBud - Usługi budowlane" />
        <meta property="og:description" content="Banbud to młoda firma budowlana prężnie rozwijająca się na rynku. Nasz zespół liczy kilkunastu robotników oraz cały szereg maszyn, wykorzystywanych przez nas do szybkiej i rzetelnej pracy.  Każdy z nas wykonuje swoje zadania pieczołowicie i konkretnie, dzięki czemu wybierając nas jako realizatorów twojego zlecenia z pewnością nie będziesz zawiedziony rezultatem." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
)

export default Head;