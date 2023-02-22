var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
const { regexpToText } = require('nodemon/lib/utils');
const favicon = require('serve-favicon');
const { Router } = require('express');
var app = express();

var a =[
    {title:"Informatique Bureautique", content:"Informatique;\n\t\nOn appelle informatique Bureautique l’ensemble des moyens et méthode appliqués aux activités de bureau permettant de traiter informatiquement des informations écrites, visuelles ou sonore. Les activités liées à l’informatique bureautique  sont les suivantes : Secrétaire assistant(e)Assistant(e) bureautique. Assistant(e) de direction. Assistant(e) de Manager. Assistant(e) de gestion. Secrétaire bureautique et comptable. Secrétaire dactylographe. Employé(e) de bureau. En effet de nos jours tous les professionnels doivent avoir un minimum de connaissance en ce qui a trait à l’informatique. Tout le monde devrait être capable de faire usage d’un ordinateur car tout est informatisé. A ACAM nous offrons une formation très large en informatique Bureautique permettant à l’apprenant de maitriser tous les logiciels de base en informatique. Vous apprenez avec nous le système d’exploitation Windows le plus récent, MS-Word, MS-Excel, MS-Access (base de données), MS-Powerpoint et l’initiation à l’internet. A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/informatique1.JPG"}, 
    {title:"Cosmetologie", content:"Étude de tout ce qui se rapporte aux produits cosmétiques, à leur activité et à leur mode d'emploi, ainsi qu'aux produits de base servant à leur préparation. Aujourd'hui, la cosmétologie s'attache à assumer une quadruple mission de décoration, de soin, de prévention et de réparation. Son territoire est celui de la physiologie cutanée et de tout ce qui peut permettre à la peau de rester en bonne santé. La Cosmétologie, Art ancien et science innovante, est créé par les Egyptiens dont l'intérêt porté aux soins du corps constituait une marque de raff inement, savaient-ils déjà élaborer toute une gamme de couleurs pour le maquillage des yeux en mélangeant différentes poudres d'origine végétale ou minérale. Datant d'au moins 10000 ans comme nous l'apprennent les découvertes de palettes de maquillage ou pots de produits de soins sur certains sites de fouilles archéologiques. Etroitement lié à l'histoire des civilisations, le désir d'entretenir sa peau, de la parer, de l'embellir ou de la soigner a progressivement amené l'Homme à développer des processus de fabrication, d'association et de conservation des substances utilisées à cet effet. Cet Art ancien a trouvé largement sa place à ACAM (Académie des Arts et de Métiers) où le rêve de tout un chacun désirant apprendre la cosmétologie se trouvent encadrer par des professionnelles chevronnés en la matière. Salle équipée à cet effet muni des matériels permettant l’apprentissage au maximum. Joint à tout cela, notre curriculum est révisé à chaque fois cela semble nécessaire en vue de répondre à la nouveauté qu’exige le marché cosmétique dont plus d’un appelle cosmétologie moderne. Faire choix de ACAM pour étudier la cosmétologie est un choix idéal.A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/Cosmetologie1.jpg"},
    {title:"Cuisine & Patisserie", content:"La cuisine est l'ensemble des techniques de préparation des aliments en vue de leur consommation par les êtres humains. La pâtisserie désigne à la fois certaines préparations culinaires sucrées à base de pâte1, l'ensemble des opérations pour leur confection, la boutique où se vendent ces préparations faites par un pâtissier ou par l'industrie agroalimentaire, ainsi que cette même industrie de transformation et de commerc ialisation de ces produits : gâteaux et tartes notamment. Dans la cuisine médiévale d'Europe du Nord, les pâtissiers étaient capables de produire de belles pâtisseries rigides parce qu'ils cuisinaient avec de la graisse alimentaire et du beurre. Certaines listes d'ingrédients incomplètes ont été retrouvées dans des livres de cuisine médiévaux, mais aucune version complète et détaillée. Il existait des pâtisseries rigides et vides qui étaient consommées uniquement par les serviteurs et étaient recouvertes d'un glaçage au jaune d'œuf pour les rendre plus agréables à manger. Les pâtisseries médiévales comprenaient également des petites tartes pour ajouter de la richesse. Ce n'est que vers le milieu du 16e siècle que de véritables recettes de pâtisserie ont commencé à apparaître3,4. Ces recettes ont été adoptées et adaptées au fil du temps dans divers pays européens, donnant lieu à la myriade de traditions pâtissières connues, des pastéis de nata portugais à l'ouest aux pirozhki russes à l'est. L'utilisation du chocolat dans les pâtisseries occidentales, si courante aujourd'hui, n'est apparue qu'après que les commerçants espagnols et portugais eurent apporté le chocolat du Nouveau Monde en Europe à partir du xvie siècle. De nombreux historiens culinaires considèrent le pâtissier français Antonin Carême (1784-1833) comme le premier grand maître de la pâtisserie des temps modernes.", img:"../PhotoWeb/cuisine1.JPG"},
    {title:"Couture & Haute Couture", content:"La couture est l’action, manière de coudre ; ensemble des procédés que l'on met en œuvre en cousant. La haute couture fut inventée par l'Anglais Charles Frederick Worth en France vers la fin du 19e siècle. Celui-ci devient le premier créateur de mode ou grand couturier de l'histoire. En effet les professionnels de ce secteur préparent des vertement ni pour homme ni pour femme ce qui porte à distinguer la coupe féminine et la coupe masculine. A ACAM nos apprenants apprennent les deux coupes féminine et masculine qui font d’eux un professionnel quasi complet dans ce domaine. Toujours dans le souci de bien fait, nos étudiants(es) sont encadrés par des professeurs expérimentés et chevronnés. A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/Couture.jpg"}, 
    {title:"Plomberie", content:"La plomberie sanitaire : Elle concerne tous les systèmes pouvant faire circuler l'eau dans une maison. Cela inclut l'alimentation en eau froide et eau chaude, le déversement des eaux usées, ainsi que l'installation des dispositifs sanitaires. Une installation de plomberie est constituée de divers éléments : compteur d'eau, canalisations, raccords, joints, a accessoires. Tous ces éléments existent dans de nombreuses déclinaisons et matériaux. Petite historicité de la plomberie. 1486 : invention du robinet par l'anglais George Fancell de la Roches Bourgnione. 1548 : le métier de plombier devient un métier à part entière grâce au roi Henri III. Auparavant, il faisait partie de la corporation des couvreurs. 1592 : invention de la première chasse d'eau par John Harington en Angleterre. Les techniciens formés reçoivent une formation suffisante les permettant de répondre aux besoins de leur client. Nos étudiants (es) formés (es) à ACAM maitrisent non seulement les ABC de la plomberie sanitaire mais aussi les installations les plus complexes telle que l’installation Eau chaude et froide dans une maison. A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/plomberie.png"},
    {title:"Electricite", content:"L'électricité bâtiment peut être perçue comme un ensemble de systèmes lié aux travaux d'installation et de mise en service des équipements électriques dans les bâtiments, selon les règles de sécurité. Ces bâtiments peuvent être à usage domestique, tertiaire et même industriel. Les installations électriques sont multiples Prises de courant. •	Interrupteurs.  •	Appareil d'éclairage.  •	Télécommunications domestiques, Sonnettes. •	Chauffage électrique. •	 Installations Électromécaniques. Les Techniciens(nes) formés(es) à ACAM sont encadrés par les meilleurs professeurs de la place. Ils (elles) ont bonne connaissance théorique et pratique dans ce domaine. A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/Electricite.JPG"} ,
    {title:"Refrigeration et Climatisation", content:"La réfrigération désigne l'ensemble des procédés frigorifiques servant à abaisser la température dans un espace fermé pour maintenir et conserver en état sanitaire des produits et denrées le plus souvent alimentaires. Alors que la climatisation est la technique qui consiste à modifier, contrôler et réguler les conditions climatiques (température, humidité, niveau de poussières. Les Techniciens évoluant dans ce domaine doivent être capables de répondre au différents besoin  de leur entourage tel que la réparation d’un réfrigérateur, l’installation et la maintenance d’un climatiseur. A ACAM, ces différentes facettes sont prises en compte afin que nos étudiant offrent un meilleur service à leur client. A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/refrigeration1.jpg"}, 
    {title:"Carrelage", content:"Le terme de carrelage désigne à l'origine l'action de poser des carreaux, puis, par métonymie, le résultat de cette action. Il désigne alors un revêtement .Autrement dit opération qui consiste à assembler des carreaux de manière à en former un pavement ou un revêtement. Le résultat est le revêtement de sol en carreaux. Cette invention est attribuée aux Romains  utilisée initialement en Egypte, en Perse, en Mésopotamie,… Ce sont les eux qui répandent leur utilisation dans tout l'empire en réalisant des mosaïques à partir de carreaux de céramiques. Les carreleurs (se) formés(e) à ACAM sont dotés (es) d’une formation adéquate les permettant de répondre aux exigences du marché du travail. A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/Carrelage1.png"},
    {title:"Technique Windows", content:"Les techniques de construction et de pose des portes et fenêtres dépendent des conditions climatiques, des traditions et de la réglementation locale. Une fenêtre assure plusieurs fonctions pour le local concerné : l'éclairage, la vue intérieur-extérieur ou vers l'extérieur seul, l'aération, auxquels s'ajoutent parfois la communication verbale et la sécurité des évacuations. Ceux et celles qui pratiquent le métier vitrier aujourd’hui a une très forte demande car, les  fenêtres des maisons sont faites en vitre pour la beauté que cela procure. Les Vitriers formés à ACAM sont capables non seulement de faire l’assemblage et l’installation des fenêtres en vitre mais aussi des portes en vitre. A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/DSC_0107.JPG"},
    {title:"Comptabilite Informatise", content:"La comptabilité informatisée concerne l'ensemble des systèmes qui contribuent à la production des écritures comptables. La comptabilité informatisée concerne aussi bien la gestion commerciale (achats/ventes), la gestion des stocks ou encore la gestion des immobilisations pour les amortissements. L'informatisation de la comptabilité a permis l'automatisation des tâches répétitives, la fiabilité des données et d'éviter le risque d'erreur. L'impression des états comptables est possible à tout moment et le coût de l'archivage est actuellement réduit grâce à l'informatique. Le recours à un comptable pour tenir la comptabilité d'une entreprise n'est pas obligatoire. Il est donc possible de faire sa comptabilité soi-même lorsqu'on est entrepreneur. Toutefois, la comptabilité devra être tenue de façon rigoureuse et respecter les principes de la comptabilité. A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/DSC_0170.JPG"}, 
    {title:"Secretaria de Direction", content:"Le/la secrétaire de direction joue un rôle clé dans l'assistanat d'un responsable ou dirigeant afin d'optimiser la gestion de son activité. Il ou elle assiste quotidiennement le chef d'entreprise dans la tenue de ses affaires courantes. Réceptionner, rédiger et transmettre les courriers et les e-mails, gérer l'agenda de son (ses) responsable(s), préparer les voyages et déplacements, organiser des réunions, prendre en notes les échanges et rédiger les comptes rendus, trier et organiser le classement de documents et dossiers. Notre programme de formation répond à tous les critères permettant à ce et celle qui ont fait choix de ACAM de bien remplir son rôle sur le marché du travail grâce à un curriculum bien charpenté pour la formation de nos apprenants. A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/IMG-20210908-WA0003.jpg"},
    {title:"Assistance Administrative", content:"Un assistant administratif occupe une place essentielle dans la gestion d'une entreprise. Il est chargé du traitement des documents. Ses activités principales consistent à faire circuler l'information au sein de l'entreprise et à assurer la réalisation de toutes les tâches administratives. Cependant les missions classiques d'assistance administrative concernent généralement la facturation, la bureautique, le suivi des dossiers, l'accueil téléphonique et la redirection des appels vers les bons interlocuteurs. Grace à des professeurs compétents dont dispose notre établissement, choisir d’étudier à ACAM est un choix judicieux. A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/IMG_5423.JPG"},
    {title:"Technique Bancaire", content:"Les techniques bancaires représentent l'ensemble des méthodes et processus utilisés par les banques dans le but d'exercer leurs métiers dans les meilleures conditions possibles. Un système bancaire est un ensemble de banques et d'autres établissements financiers et d'une Banque centrale qui entretiennent des relations financières de créances et d'engagements les uns vis-à-vis des autres ainsi que vis-à-vis des agents non financiers. Nous identifions trois modèles opérationnels : la banque commerciale financée par les dépôts de détail (banque de détail) ; la banque commerciale qui fait appel au marché des capitaux pour se financer (banque à financement de marché) ; et la banque de négoce, essentiellement active sur les marchés financiers. Si vous rêvez d’étudier la technique bancaire ACAM est l’Ecole que tu devrais choisir.A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/IMG_5423.JPG"}, 
    {title:"Technique Douaniere", content:"Les douaniers (ères) ont pour rôle de sécuriser et simplifier les opérations de transit, promouvoir de véritables recours en cas d'abus des services. On entend par  Douane  administration chargée d'établir et de percevoir les droits imposés sur les marchandises, à la sortie ou à l'entrée d'un pays. La procédure douanière qui stipule que les biens importés entrent en libre circulation sur le territoire douanier dès qu'ont été payés les droits et taxes d'importation exigibles et qu'ont été accomplies toutes les formalités douanières nécessaires. Toute violation ou tentative de violation de la législation douanière. Toutefois celui qui étudie la technique douanière peut travailler avec ces connaissances dans d’autres institution où le service de livraison et l’envoie des colis est sollicité. C’est un discipline qui offre plusieurs possibilités soit trouver un emploi ou monter votre propre service Cargo. A ACAM nous avons un curriculum bien charpenté pour l’enseignement de ce cours. Nos étudiants (es) en douane suivent le programme en entier. A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/IMG_5422.JPG"},
    {title:"Hotellerie & Tourisme", content:"Hotellerie est l’ensemble de l'industrie hôtelière et de ses activités ; la profession hôtelière : Les métiers de l'hôtellerie. L'origine de l'hôtellerie remonte à l'antiquité ! À l'époque, les visiteurs de passage étaient encore logés et nourris chez les gens de communauté et cela était même considéré comme un devoir. Dans les pays à vocation touristique, l'hôtellerie en raison de son volume d'affaires, participe activement à la vie économique et sociale. De par la nécessité de s'adapter constamment au marché, l'hôtellerie est inventive et crée de nouveaux produits, de nouveaux concepts répondant à l'évolution de la clientèle. L'hôtellerie et du tourisme est axé sur la gestion, le marketing et l'exploitation de restaurants et de services de restauration, d'hébergement, d'attractions, d'événements récréatifs et de services liés aux voyages. Nous avons un large succès dans l’enseignement de l’Hôtellerie et Tourisme. Selon des témoignages, nos apprenants sont très performants sur le marché de l’hôtellerie. A noter que toutes nos formations sont sanctionnées par le Ministère de l’Education Nationale et de la Formation Professionnelle.", img:"../PhotoWeb/Hotellerie.jpg"}  
];

// console.log(a[0].title);
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
// app.use();

var img ="a";
// app.use(favicon(__dirname + '/favicon.ico'));
app.get('/', (req, res)=>{
res.render("index");
});

app.get('/options', (req, res)=>{
    res.render('options', {data:a});
});

app.get("/:id", (req, res)=>{
    var id = req.params.id;
    switch(id){
        case ":Informatique Bureautique":res.render('partiel/option', {data:a[0].content, title:a[0].title, img:a[0].img}); 
        break;
        case ":Cosmetologie":res.render('partiel/option', {data:a[1].content, title:a[1].title, img:a[1].img}); 
        break;
        case ":Cuisine & Patisserie":res.render('partiel/option', {data:a[2].content, title:a[2].title, img:a[2].img}); 
        break;
        case ":Couture & Haute Couture":res.render('partiel/option', {data:a[3].content, title:a[3].title, img:a[3].img}); 
        break;
        case ":Plomberie":res.render('partiel/option', {data:a[4].content, title:a[4].title, img:a[4].img}); 
        break;
        case ":Electricite":res.render('partiel/option', {data:a[5].content, title:a[5].title, img:a[5].img}); 
        break;
        case ":Refrigeration et Climatisation":res.render('partiel/option', {data:a[6].content, title:a[6].title, img:a[6].img}); 
        break;
        case ":Carrelage":res.render('partiel/option', {data:a[7].content, title:a[7].title, img:a[7].img}); 
        break;
        case ":Technique Windows":res.render('partiel/option', {data:a[8].content, title:a[8].title, img:a[8].img}); 
        break;
        case ":Comptabilite Informatise":res.render('partiel/option', {data:a[9].content, title:a[9].title, img:a[9].img}); 
        break;
        case ":Secretaria de Direction":res.render('partiel/option', {data:a[10].content, title:a[10].title, img:a[10].img}); 
        break;
        case ":Assistance Administrative":res.render('partiel/option', {data:a[11].content, title:a[11].title, img:a[11].img}); 
        break;
        case ":Technique Bancaire":res.render('partiel/option', {data:a[12].content, title:a[12].title, img:a[12].img}); 
        break;
        case ":Technique Douaniere":res.render('partiel/option', {data:a[13].content, title:a[13].title, img:a[13].img}); 
        break;
        case ":Hotellerie & Tourisme":res.render('partiel/option', {data:a[14].content, title:a[14].title, img:a[14].img}); 
        break;
        default:res.render(req.params.id);
    }
       
});

app.get('/contact', (req, res)=>{
res.render('contact');
});

app.get('/inscription', (req, res)=>{
res.render('inscription');
});

app.get('/:page', (req, res)=>{
    res.render(req.params.page);
});


app.get('/apropos', (req, res)=>{
res.render('apropos');
});

app.get('/temoignage', (req, res)=>{
    res.render('temoignage');
});

app.get('/post/:titre',(req, res)=>{
    var titre = req.params.titre;
    res.render()
});








app.listen(3000, ()=>{
    console.log("the server is up and running");
});