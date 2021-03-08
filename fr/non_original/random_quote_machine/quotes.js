const quotes = [
{"quote":"La vie est de faire un impact, et non pas faire un revenu.","author":"Kevin Kruse"},
{"quote":"Tout ce que l'esprit con\u00E7oit et croit, il peut l'obtenir.","author":"Napoleon Hill"},
{"quote":"N'essayez pas de devenir un homme qui a du succ\u00E8s. Essayez de devenir un homme qui a de la valeur.","author":"Albert Einstein"},
{"quote":"J'\u00E9tais au milieu de la for\u00EAt, il y avait deux chemins devant moi, j'ai pris celui qui \u00E9tait le moins emprunt\u00E9, et l\u00E0, ma vie a commenc\u00E9.","author":"Robert Frost"},
{"quote":"Regardons nos consciences comme nous regardons nos mains, pour voir si elles sont sales.","author":"Florence Nightingale"},
{"quote":"100% des choses qu'on ne tente pas \u00E9chouent.","author":"Wayne Gretzky"},
{"quote":"J'ai rat\u00E9 9000 tirs dans ma carri\u00E8re. J'ai perdu presque 300 matchs. 26 fois, on m'a fait confiance pour prendre le tir de la victoire et j'ai rat\u00E9.  J'ai \u00E9chou\u00E9 encore et encore et encore dans ma vie. Et c'est pourquoi je r\u00E9ussi.","author":"Michael Jordan"},
{"quote":"La chose la plus difficile est la d\u00E9cision d'agir, le reste n'est que t\u00E9nacit\u00E9.","author":"Amelia Earhart"},
{"quote":"Les coups de circuit d'hier ne font pas gagner les parties d'aujourd'hui.","author":"Babe Ruth"},
{"quote":"La pr\u00E9cision du but est le point de d\u00E9part de tout succ\u00E8s.","author":"W. Clement Stone"},
{"quote":"La vie c'est ce qui arrive pendant que vous pr\u00E9voyez autre chose.","author":"John Lennon"},
{"quote":"Afin d'atteindre le bonheur, il faudrait \u00EAtre certain de toujours se fixer un but important.","author":"Earl Nightingale"},
{"quote":"Dans vingt ans, tu seras plus d\u00E9\u00E7u par les choses que tu n'auras pas faites que par celles que tu auras faites. Alors largue les amarres, sors du port, attrape les aliz\u00E9s dans tes voiles. Explore. R\u00EAve. D\u00E9couvre.","author":"Mark Twain"},
{"quote":"La vie est 10% ce qui vous arrive et 90% comment vous y r\u00E9agissez.","author":"Charles Swindoll"},
{"quote":"La mani\u00E8re la plus courante par laquelle les gens abandonnent leur pouvoir, c'est en pensant qu'ils n'en ont aucun.","author":"Alice Walker"},
{"quote":"Nous sommes ce que nous pensons. Tout ce que nous sommes r\u00E9sulte de nos pens\u00E9es. Avec nos pens\u00E9es, nous b\u00E2tissons notre monde.","author":"Bouddha"},
{"quote":"Le meilleur moment pour planter un arbre \u00E9tait il y a 20 ans. Le deuxi\u00E8me meilleur moment est maintenant.","author":"Proverbe Chinois"},
{"quote":"Une vie sans examen ne vaut pas la peine d'\u00EAtre v\u00E9cue.","author":"Socrate"},
{"quote":"Quatre-vingts pour cent du succ\u00E8s r\u00E9side dans le fait d'\u00EAtre vu.","author":"Woody Allen"},
{"quote":"Votre temps est limit\u00E9, ne le g\u00E2chez pas en menant une existence qui n'est pas la v\u00F4tre.","author":"Steve Jobs"},
{"quote":"La qualit\u00E9 de la vie d'une personne est en rapport direct avec sa volont\u00E9 d'exceller, quel que soit le domaine o\u00F9 elle s'exerce.","author":"Vince Lombardi"},
{"quote":"Je ne suis pas un produit de ma situation. Je suis un produit de mes d\u00E9cisions.","author":"Stephen Covey"},
{"quote":"Dans chaque enfant il y a un artiste. Le probl\u00E8me est de savoir comment rester un artiste en grandissant.","author":"Pablo Picasso"},
{"quote":"Tu ne traverseras jamais l'oc\u00E9an si tu as peur de perdre de vue le rivage.","author":"Christophe Colomb"},
{"quote":"Les gens oublieront ce que vous avez dit, ils oublieront ce que vous avez fait, mais n'oublieront jamais ce que vous leur avez fait ressentir.","author":"Maya Angelou"},
{"quote":"Soit vous g\u00E9rez le jour, soit le jour vous g\u00E9re.","author":"Jim Rohn"},
{"quote":"Il y a des gens qui disent qu'ils peuvent; d'autres qu'ils ne peuvent pas. En g\u00E9n\u00E9ral, ils ont tous raison.","author":"Henry Ford"},
{"quote":"Les deux jours les plus importants de votre vie sont le jour o\u00F9 vous \u00EAtes n\u00E9 et le jour o\u00F9 vous d\u00E9couvrez pourquoi.","author":"Mark Twain"},
{"quote":"Quoi que vous puissiez faire, quoi que vous r\u00EAviez, commencez-le. La hardiesse a du g\u00E9nie, de la force et de la magie.","author":"Johann Wolfgang von Goethe"},
{"quote":"La meilleure vengeance est le succ\u00E8s \u00E9norme.","author":"Frank Sinatra"},
{"quote":"Les gens disent souvent que la motivation ne dure pas. Eh bien, la baignade non plus. C'est pourquoi nous la recommandons tous les jours.","author":"Zig Ziglar"},
{"quote":"La vie r\u00E9tr\u00E9ci ou s'\u00E9tend proportionnellement \u00E0 notre courage.","author":"Anais Nin"},
{"quote":"Si vous entendez une voix en vous dire 'vous ne pouvez pas peindre', alors peignez et cette voix sera r\u00E9duite au silence.","author":"Vincent Van Gogh"},
{"quote":"Il n'y a qu'une seule fa\u00E7on d'\u00E9viter les critiques: ne dis rien, ne fais rien, ne sois rien.","author":"Aristote"},
{"quote":"Demandez et vous serez r\u00E9compens\u00E9; cherchez et vous trouverez; frappez et la porte s'ouvrira pour vous.","author":"J\u00E9sus-Christ"},
{"quote":"Celui qui avance avec confiance dans le sens de ses r\u00EAves et qui s'efforce \u00E0 vivre la vie qu'il a imagin\u00E9e, rencontrera un succ\u00E8s inattendu.","author":"Henry David Thoreau"},
{"quote":"Quand je serai devant Dieu \u00E0 la fin de ma vie, j'esp\u00E8re qu'il ne me restera plus de talent et que je pourrais dire, j'ai utilis\u00E9 tout ce que vous m'avez donn\u00E9.","author":"Erma Bombeck"},
{"quote":"L'une des meilleures fa\u00E7ons d'aider quelqu'un est de lui donner une responsabilit\u00E9 et de lui faire savoir que vous lui faites confiance.","author":"Booker T. Washington"},
{"quote":"Croyez que vous pouvez le faire et vous aurez d\u00E9j\u00E0 fait la moiti\u00E9 du chemin.","author":"Theodore Roosevelt"},
{"quote":"Tout ce que vous avez toujours voulu se trouve de l'autre c\u00F4t\u00E9 de la peur.","author":"George Addair"},
{"quote":"On peut ais\u00E9ment pardonner \u00E0 l'enfant qui a peur de l'obscurit\u00E9; la vraie trag\u00E9die de la vie c'est lorsque les hommes ont peur de la lumi\u00E8re.","author":"Platon"},
{"quote":"Commence o\u00F9 tu es. Utilise ce que tu as. Fais ce que tu peux.","author":"Arthur Ashe"},
{"quote":"Sept fois \u00E0 terre, huit fois debout.","author":"Proverbe Japonais"},
{"quote":"Lorsqu'une porte du bonheur se ferme, une autre s'ouvre; mais parfois on observe si longtemps celle qui est ferm\u00E9e qu'on ne voit pas celle qui vient de s'ouvrir \u00E0 nous.","author":"Helen Keller"},
{"quote":"Toutes les choses ont leur beaut\u00E9, mais tout le monde ne sait pas les voir.","author":"Confucius"},
{"quote":"N'est-il pas merveilleux que nous pouvons tous, \u00E0 l'instant m\u00EAme, travailler \u00E0 la cr\u00E9ation d'un monde meilleur?","author":"Anne Frank"},
{"quote":"La vie ne se mesure pas par le nombre de respirations que vous prenez, mais par les moments qui vous coupent le souffle.","author":"Maya Angelou"},
{"quote":"Le bonheur n'est pas quelque chose d'acquis. Il vient par nos propres actions.","author":"Dala\u00EF-Lama"},
{"quote":"Si quelqu'un vous offre une place \u00E0 bord d'une fus\u00E9e, ne demandez pas de quelle place il s'agit. Montez!","author":"Sheryl Sandberg"},
{"quote":"Nous devons croire que nous sommes dou\u00E9s pour quelque chose, et que cette chose, \u00E0 n'importe quel prix, doit \u00EAtre atteinte.","author":"Marie Curie"},
{"quote":"Trop d'entre nous ne vivent pas leurs r\u00EAves car nous vivons nos peurs.","author":"Les Brown"},
{"quote":"Les d\u00E9fis rendent la vie int\u00E9ressante; les surmonter lui donne un sens.","author":"Joshua J. Marine"},
{"quote":"J'ai \u00E9t\u00E9 impressionn\u00E9 par l'urgence de faire. Savoir n'est pas suffisant; nous devons appliquer. \u00EAtre pr\u00EAt n'est pas assez; nous devons agir.","author":"L\u00E9onard de Vinci"},
{"quote":"Vous prenez votre vie en main, et que se passe-t-il? Une chose terrible, personne \u00E0 bl\u00E2mer.","author":"Erica Jong"},
{"quote":"Qu'est-ce que l'argent ? Un homme a r\u00E9ussi s'il se l\u00E8ve le matin, se couche le soir et entre les deux a fait ce qu'il voulait faire.","author":"Bob Dylan"},
{"quote":"Je n'ai pas manqu\u00E9 le test, j'ai juste trouv\u00E9 100 fa\u00E7ons de mal le faire.","author":"Benjamin Franklin"},
{"quote":"Pour r\u00E9ussir, votre d\u00E9sir de r\u00E9ussite doit \u00EAtre plus grand que votre peur de l'\u00E9chec.","author":"Bill Cosby"},
{"quote":"Une personne qui n'a jamais commis d'erreur n'a jamais rien essay\u00E9 de nouveau.","author":"Albert Einstein"},
{"quote":"Une personne qui r\u00E9p\u00E8te qu'on ne peut pas le faire, ne devrait pas interrompre celui qui tente de le faire.","author":"Proverbe Chinois"},
{"quote":"Il n'est jamais trop tard pour devenir ce que nous aurions pu \u00EAtre.","author":"George Eliot"},
{"quote":"On devient ce que l'on croit.","author":"Oprah Winfrey"},
{"quote":"Je pr\u00E9f\u00E9rerais mourir de passion que d'ennui","author":"Vincent van Gogh"},
{"quote":"L'homme r\u00E9ellement riche est celui dont les enfants courent dans ses bras alors qu'il a les mains vides.","author":"Inconnu"},
{"quote":"Construisez vos propres r\u00EAves, ou quelqu'un d'autre vous embauchera pour construire les siens.","author":"Farrah Gray"},
{"quote":"Les batailles qui comptent ne sont pas celles pour les m\u00E9dailles d'or. Les luttes au sein de soi-m\u00EAme-les batailles invisibles \u00E0 l'int\u00E9rieur de chacun d'entre nous-c'est cela qui compte.","author":"Jesse Owens"},
{"quote":"L'\u00E9ducation co\u00FBte de l'argent. Mais l'ignorance aussi.","author":"Sir Claus Moser"},
{"quote":"J'ai appris au fil du temps que quand nous sommes fermement r\u00E9solus, notre peur diminue.","author":"Rosa Parks"},
{"quote":"Peu importe la vitesse \u00E0 laquelle tu avances, tant que tu ne t'arr\u00EAtes pas.","author":"Confucius"},
{"quote":"Souvenez-vous que ne pas obtenir ce que vous voulez est parfois un merveilleux coup de chance.","author":"Dala\u00EF-Lama"},
{"quote":"Si tu te concentres sur ce que tu as, tu auras toujours plus. Si tu te concentres sur ce que tu n'as pas, tu n'auras jamais assez.","author":"Oprah Winfrey"},
{"quote":"Vous ne pouvez pas \u00E9puiser votre cr\u00E9ativit\u00E9. Plus vous l'utilisez, plus vous en avez.","author":"Maya Angelou"},
{"quote":"R\u00EAvez grand, et osez \u00E9chouer.","author":"Norman Vaughan"},
{"quote":"Nos vies commencent \u00E0 finir le jour o\u00F9 nous devenons silencieux \u00E0 propos des choses qui comptent.","author":"Martin Luther King Jr."},
{"quote":"Faites ce que vous pouvez, l\u00E0 o\u00F9 vous \u00EAtes, avec ce que vous avez.","author":"Teddy Roosevelt"},
{"quote":"Si vous faites ce que vous avez toujours fait, vous aurez ce que vous avez toujours eu.","author":"Anthony Robbins"},
{"quote":"Apr\u00E8s tout, r\u00EAver est une sorte de planification.","author":"Gloria Steinem"},
{"quote":"C'est votre place dans le monde; c'est votre vie. Continuez et faites-en tout ce que vous pouvez, faites-en la vie que vous voulez vivre.","author":"Mae Jemison"},
{"quote":"Si vous \u00E9chouez, vous serez peut-\u00EAtre d\u00E9\u00E7u. Mais si vous n'essayez pas, vous \u00EAtes perdu.","author":"Beverly Sills"},
{"quote":"Personne ne peut vous diminuer sans que vous y consentiez.","author":"Eleanor Roosevelt"},
{"quote":"La vie est ce que nous en faisons, cela a toujours \u00E9t\u00E9, cela sera toujours.","author":"Grandma Moses"},
{"quote":"La question n'est pas de savoir qui va me laisser faire; mais qui va m'arr\u00EAter.","author":"Ayn Rand"},
{"quote":"Quand tout semble \u00EAtre contre vous, souvenez-vous que l'avion d\u00E9colle face au vent, et non avec lui.","author":"Henry Ford"},
{"quote":"Ce qui compte, ce ne sont pas les ann\u00E9es qu'il y a dans votre vie. C'est la vie qu'il y a dans vos ann\u00E9es.","author":"Abraham Lincoln"},
{"quote":"Changez vos pens\u00E9es et vous changez votre monde.","author":"Norman Vincent Peale"},
{"quote":"Ecrivez quelque chose qui vaut la peine d'\u00EAtre lu ou faites quelque chose qui vaut la peine d'\u00EAtre \u00E9crit.","author":"Benjamin Franklin"},
{"quote":"Le seul moyen de faire du bon travail c'est d'aimer ce que l'on fait.","author":"Steve Jobs"},
{"quote":"Si vous pouvez en r\u00EAver, vous pouvez le faire.","author":"Zig Ziglar"}
];