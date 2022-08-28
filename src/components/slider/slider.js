import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import Slick from 'vue-slick'

export default {
    name: 'Slider',
    components: {
        Slick
    },
    data () {
        return {
            slickOptions: {
                slidesToShow: 1,
                infinite: true,
                speed: 400,
                fade: true,
                cssEase: 'linear'
            },
            slides: [
                {
                    cssClass: 'special intro galaxy no-lang-title no-lang-desc',
                    special: {
                        title: {
                            he: "ברוכים הבאים ל <i>My Perek Shira</i>",
                            en: "Welcome to <i>My Perek Shira</i>",
                            fr: "Bienvenue sur <i>My Perek Shira</i>"
                        },
                        desc: {
                            he: "לסחוב כדי להתחיל",
                            en: "Swipe to begin",
                            fr: "Faire glisser pour commencer"
                        }
                    }
                },
                {
                    cssClass: 'special intro-prayer galaxy',
                    special: {
                        title: {
                            he: "טוב להגיד לפני",
                            en: "It is good to say first",
                            fr: "Il est bon de dire avant"
                        },
                        desc: {
                            he: `<p>אָמַר רַבִּי אֱלִיעֶזֶר, כָּל הָעוֹסֵק בְּפֶּרֶק שִׁירָה בָּעוֹלָם הַזֶה זוֹכֶה וְאוֹמְרָה לְעוֹלָם הַבָּא שֶׁנֶּאֱמַר ״אָז יָשִׁיר מֹשֶׁה״ – ״שָׁר״ לֹא נֶאֱמַר אֶלָּא ״יָשִׁיר״ לָעוֹלָם הַבָּא׃</p>
                            <p>וְאָמַר רַבִּי כָּל הָעוֹסֵק בְּפֶּרֶק שִׁירָה בָּעוֹלָם הַזֶה מַעִיד אֲנִי עָלָיו שֶׁהוּא בֶּן עוֹלָם הַבָּא וְנִצוֹל מִיֵצֶר הָרָע וּמִדִּין קָשֶׁה וּמִשָּׂטָן הַמַשְׁחִית וּמִכָּל מִינֵי מַזִיקִין וּמֵחֶבְלוֹ שֶׁל מָשִׁיחַ וּמִדִּינָה שֶׁל גֵּיהִנֹם וְזוֹכֶה לִלְמוֹד וּלְלַמֵד לִשְׁמוֹר וְלַעֲשׂוֹת וּלְקַיֵים וְתַלְמוּדוֹ מְקַיֵים בְּיָדוֹ וּמַאַרִיךְ יָמִים וְזוֹכֶה לְחַיֵי עוֹלָם הַבָּא׃</p>
                            <p>(ילקוט שמעוני, סוף תהלים) אָמְרוּ רַבּוֹתֵינוּ ז״ל עַל דָּוִד הַמֶלֶךְ ע״ה בְּשָׁעָה שֶׁסִּיֵים סֵפֶר תְּהִלִים זָחָה דַעַתּוֹ עָלָיו. אָמַר לִפְנֵי הַקָדוֹשׁ בָּרוּךְ הוּא ״יֵשׁ בְּרִיאָה שֶׁבָּרָאתָ בְּעוֹלמְךָ שֶׁאוֹמֶרֶת שִׁירוֹת וְתִשְׁבָּחוֹת יוֹתֵר מִמֶנִי?״ בְּאוֹתָהּ שָׁעָה נִזְרַמְנָה לוֹ צְפַרְדֵּעַ אַחַת וְאָמְרָה לוֹ, דָּוִד! אַל תָּזּוּחַ דַּעְתְּךָ עָלֶיךָ, שֶׁאֲנִי אוֹמֶרֶת שִׁירוֹת וְתִשְׁבָּחוֹת יוֹתֵר מִמֶּךָּ. וְלֹא עוֹר אֶלָּא כָּל שִׁירָה שֶׁאֲנִי אוֹמֶרֶת מְמַשֶּׁלֶת עָלֶיהָ שְׁלֹשֶׁת אֲלָפִים מָשָׁל שֶׁנֶּאֱמַר (מלכים א ה:יב) ״וַיְדַבֵּר שְׁלֹשֶׁת אֲלָפִים מָשָׁל וַיְהִי שִׁירוֹ חֲמִשָׁה וָאָלֶף.״ וְלֹא עוֹד אֶלָּא שֶׁאֲנִי עוֹסֶקֶת בְּמִצְוָה גְדוֹלָה, וְזוּ הִיא הַמִּצְוָה שֶׁאַנִי עוֹסֶקֶת בָּהּ – יֵשׁ בִּשְׂפַת הַיָם מִין אֶחָד שֶׁאֵין פַּרְנָסָתוֹ כִּי אִם מִן הַמַיִם וּבְשָעָה שֶׁהוּא רָעֵב נוֹטְלֵנִי וְאוֹכְלֵנִי לְקַיֵים מַה שֶׁנֶאֶמַר (משלי כה:כא-כב) ״אִם רָעֵב שֹׂנַֽאַךָ הַאֲכִילֵהוּ לֶחֶם וְאִם צָמֵא הַשְׁקֵהוּ מָיִם כִּי גֶחָלִים אַתָּה חֹתֶה עַל רֹאשׁוֹ וַיְהֹוָה יְשַׁלֶּם לָךָ״ אַל תִּקְרֵי יְשַׁלֶּם לָךְ אֶלָּא יַשְׁלִימֵהוּ לָךְ׃</p>`,
                            en: `<p>Rabbi Eliezer said: Anyone who involves himself with Perek Shirah in this world, merits saying it in the World-to-Come, as it says, “Then Moshe will sing”; it does not say “sang,” but “will sing” in the World-to-Come.</p>
                            <p>And Rebbi said: Anyone who involves himself with Perek Shirah in this world — I testify that he is destined for the World-to-Come, and he is saved from the evil inclination, and from harsh judgment, and from the destroying Satan, and from all types of enemies, and from the birth pangs of Mashiaḥ, and from the judgment of Gehennom; and he merits to learn and to teach, to observe and to fulfill and to perform [the Torah], and his studies are established in him, and his days are lengthened, and he merits life in the World-to-Come.</p>
                            <p>The Sages said concerning King David that when he completed the book of Psalms, he became proud. He said before the blessed Holy One, “Is there any creature you have created in your world that says more songs and praises than I?” At that moment a frog happened across his path, and it said to him: “David! Do not become proud, for I recite more songs and praises than you. Furthermore, every song I say contains three thousand parables, as it says, ‘And he spoke three thousand parables, and his songs were one thousand five hundred.' And furthermore, I am busy with a great mitsvah, and this is the mitsvah with which I am busy: there is a certain type of creature by the edge of the sea whose sustenance is entirely from [creatures living in] the water, and when it is hungry, it takes me and eats me, such that I fulfill that which it says, ‘If your enemy is hungry, feed him; if he is thirsty, give him water to drink; for you shall heap coals of fire on his head, and YHVH shall reward you'; do not read ‘shall reward you’ but instead ‘shall make him complete you.’”</p>`,
                            fr: `<b>[FRANCAIS]</b> <p>Rabbi dit : Celui qui consacre du temps au Perek Chira en ce monde acquiert le mérite d'étudier, d'enseigner, d'obsverver les commandements négatifs et positifs et son étude persiste. Il échappe à l'instinct du mal, aux accidents fâcheux, aux tourments de la tombe, à la condamnation de l'enfer et aux souffrances pré-messianiques. Il reçoit la longévité et mérite de connaître les temps messianiques et le monde futur.</p>
                            <p>Quiconque dit ce chant en ce monde, mérite de le dire dans le monde futur comme il est dit - Alors Moïse chanta - il ne faut pas lire - Moïse a chanté - mais - il chantera dans le monde futur".</p>
                            <p>Rabbi Eliézer le Grand dit : Quiconque consacre du temps au Perek Chira chaque jour, je me porte garant que D.ieu promet qu'il verra le monde futur, qu'il ne fera pas de mauvaises rencontres, qu'il sera préservé des mauvais penchants, des mauvais jugements et de toutes sortes de calamités. Continue de tout ton coeur et de toute ton âme à connaître Ses voies. Observe Ses commandements et Ses décrets. Garde Sa Torah dans ton coeur et conserve à chaque instant Sa crainte devant tes yeux. Garde ta bouche et ta langue de tout pêché et culpabilité et Il sera partout où tu iras. Il t'enseignera le discernement et l'intelligence de toutes choses.</p>
                            <p>Sache que toutes choses que le Saint Béni soit-il a créé, Il l'a créé pour Sa gloire comme il est dit : "Tous ceux qui se réclament de Mon Nom, tout ce que pour Ma gloire j'ai créé, formé, organisé".</p>
                            <p>Nos sages ont dit : Lorsque David, Roi d'Israël, eut fini la rédaction de ses psaumes, il ressentit une grande exaltation et demanda à D.ieu : "Existe-t-il au monde un être créé qui chante Tes louanges mieux que moi ?". Alors, sur son chemin, une grenouille l'apostropha et dit : "David, ton exaltation est inutile car je sais beaucoup mieux que toi chanter et célébrer D.ieu ! Et bien davantage, chacun de mes chants contient trois mille paraboles comme il est dit "Le Roi Salomon énonce trois mille paraboles par la parole et mille cinq cent par son chant".</p>
                            <p>Mieux encore, j'accomplis une autre ordonnance et voici laquelle : Il existe une créature qui vit au bord de la mer et tire toute sa substance de l'eau. Quand elle a faim elle me capture et me mange. C'est là mon décret pour accomplir ce qui est dit : "Si ton ennemi a faim, donne lui à manger. Si il a soif, donne lui à boire. Ainsi tu attises les braise sur sa tête et l'Eternel te comblera".</p>`
                        }
                    }
                },
                {
                    cssClass: 'special chapter chapter1 galaxy',
                    special: {
                        title: {
                            he: "פרק ראשון",
                            en: "Chapter 1",
                            fr: "Chapitre 1"
                        }
                    }
                },
                {
                    cssClass: 'sky',
                    texts: {
                        textSays: {
                            he: "שָׁמַיִם אוֹמְרִים",
                            en: "The Heavens say",
                            fr: "Les Cieux disent",
                        },
                        textMain: {
                            he: " הַשָּׁמַ֗יִם מְֽסַפְּרִ֥ים כְּבֽוֹד־אֵ֑ל וּֽמַעֲשֵׂ֥ה יָ֝דָ֗יו מַגִּ֥יד הָרָקִֽיעַ׃ ",
                            en: "The heavens speak of God&rsquo;s glory, and the skies tell of His handiwork.",
                            fr: "Les cieux proclament la gloire de Dieu et le firmament célèbre l'oeuvre de Ses mains",
                        },
                        textSource: {
                            he: "תהלים יט, ב",
                            en: "Psalms 19:2",
                            fr: "Psaumes 19:2",
                        },
                    }
                },
                {
                    cssClass: 'earth',
                    texts: {
                        textSays: {
                            he: "אֶרֶץ אוֹמֶרֶת",
                            en: "The Earth says",
                            fr: "La Terre dit",
                        },
                        textMain: {
                            he: "לְדָוִ֗ד מִ֫זְמ֥וֹר לַֽ֭יהוָה הָאָ֣רֶץ וּמְלוֹאָ֑הּ תֵּ֝בֵ֗ל וְיֹ֣שְׁבֵי בָֽהּ׃ <span class='text-source'>תהלים פרק כד א</span><br>ואומר. מִכְּנַ֨ף הָאָ֜רֶץ זְמִרֹ֤ת שָׁמַ֙עְנוּ֙ צְבִ֣י לַצַּדִּ֔יק׃",
                            en: "The earth and every thing in it are God&rsquo;s; the inhabited area and all that dwell within it.&rdquo;<br>And it says: &ldquo;From the wings of the land we have heard song, glory to the righteous.",
                            fr: "A l'Eternel appartient la terre et tout ce qu'elle renferme, le globe et ceux qui l'habitent.<br>Et : Des confins de la terre nous entendons des chants de gloire pour les Justes.",
                        },
                        textSource: {
                            he: "ישעיהו כד טז",
                            en: "Isaiah 24:16",
                            fr: "Isaïe 24:16",
                        },
                    }
                },
                {
                    cssClass: 'eden',
                    texts: {
                        textSays: {
                            he: "גַּן עֵדֶן אוֹמֵר",
                            en: "The Garden of Eden says",
                            fr: "Le jardin d'Eden dit",
                        },
                        textMain: {
                            he: "ע֤וּרִי צָפוֹן֙ וּב֣וֹאִי תֵימָ֔ן הָפִ֥יחִי גַנִּ֖י יִזְּל֣וּ בְשָׂמָ֑יו יָבֹ֤א דוֹדִי֙ לְגַנּ֔וֹ וְיֹאכַ֖ל פְּרִ֥י מְגָדָֽיו׃",
                            en: "Arouse yourself, O north [wind], and come, O south! Blow upon my garden, let its spices flow out; let my Beloved come to His garden and eat of its precious fruit.",
                            fr: "Réveille toi rafale du nord ! Accours brise du midi ! Balayez de votre souffle mon jardin afin que ses parfums s'épandent, que mon bien aimé en goûte les fruits exquis !",
                        },
                        textSource: {
                            he: "שיר השירים ד טז",
                            en: "Song of Songs 4:16",
                            fr: "Cantique des cantiques 4:16",
                        },
                    }
                },
                {
                    cssClass: 'guehinom',
                    texts: {
                        textSays: {
                            he: "גֵּיהִנֹּם אוֹמֵר",
                            en: "Gehinnom says",
                            fr: "La Géhenne dit",
                        },
                        textMain: {
                            he: "כִּי־הִ֭שְׂבִּיעַ נֶ֣פֶשׁ שֹׁקֵקָ֑ה וְנֶ֥פֶשׁ רְ֝עֵבָה מִלֵּא־טֽוֹב׃",
                            en: "For He has satisfied the longing soul, and has filled the hungry soul with good.",
                            fr: "Car Il rassasia l'âme exténuée et remplit de délices l'âme affamée",
                        },
                        textSource: {
                            he: "תהלים קז ט",
                            en: "Psalms 107:9",
                            fr: "Psaumes 107:9",
                        },
                    }
                },
                {
                    cssClass: 'desert',
                    texts: {
                        textSays: {
                            he: "מִדְבַּר אוֹמֵר",
                            en: "The Desert says",
                            fr: "Le désert dit",
                        },
                        textMain: {
                            he: "יְשֻׂשׂ֥וּם מִדְבָּ֖ר וְצִיָּ֑ה וְתָגֵ֧ל עֲרָבָ֛ה וְתִפְרַ֖ח כַּחֲבַצָּֽלֶת׃",
                            en: "The desert and the wasteland shall rejoice, and the arid region shall exult, and blossom like the rose.",
                            fr: "Que le désert et le sol aride se réjouissent, que la morne plaine exulte et fleurisse comme la rose !",
                        },
                        textSource: {
                            he: "ישעיהו לה א",
                            en: "Isaiah 35:1",
                            fr: "Isaïe 35:1",
                        },
                    }
                },
                {
                    cssClass: 'fields',
                    texts: {
                        textSays: {
                            he: "שָׂדוֹת אוֹמְרִים",
                            en: "The Fields say",
                            fr: "Les champs disent",
                        },
                        textMain: {
                            he: "יְֽהוָ֗ה בְּחָכְמָ֥ה יָֽסַד־אָ֑רֶץ כּוֹנֵ֥ן שָׁ֝מַ֗יִם בִּתְבוּנָֽה׃",
                            en: "God founded the land with wisdom; He established the heavens with understanding.",
                            fr: "L'Eternel par Sa sagesse a fondé la terre et par Son intelligence Il a affermi les cieux.",
                        },
                        textSource: {
                            he: "משלי ג יט",
                            en: "Proverbs 3:19",
                            fr: "Proverbes 3:19",
                        },
                    }
                },
                {
                    cssClass: 'water',
                    texts: {
                        textSays: {
                            he: "מַיִם אוֹמְרִים",
                            en: "The Waters say",
                            fr: "Les eaux disent",
                        },
                        textMain: {
                            he: "לְק֨וֹל תִּתּ֜וֹ הֲמ֥וֹן מַ֙יִם֙ בַּשָּׁמַ֔יִם וַיַּ֥עַל נְשִׂאִ֖ים מִקְצֵה־אָ֑רֶץ בְּרָקִ֤ים לַמָּטָר֙ עָשָׂ֔ה וַיֹּ֥צֵא ר֖וּחַ מֵאֹצְרֹתָֽיו׃",
                            en: "When His voice resounds with a great mass of water in the heavens, and He raises vapors from the ends of the Earth; when He makes lightning amongst the rain, and He brings out the wind from its storehouses.",
                            fr: "Lorsqu'Il fait entendre le tonnerre, des torrents d'eau s'accumulent dans le ciel. Il élève des nuées des confins de la terre.",
                        },
                        textSource: {
                            he: "ירמיה נא טז",
                            en: "Jeremiah 51:16",
                            fr: "Jérémie 51:16",
                        },
                    }
                },
                {
                    cssClass: 'seas',
                    texts: {
                        textSays: {
                            he: "יָמִים אוֹמְרִים",
                            en: "The Seas say",
                            fr: "Les mers disent",
                        },
                        textMain: {
                            he: "מִקֹּל֨וֹת ׀ מַ֤יִם רַבִּ֗ים אַדִּירִ֣ים מִשְׁבְּרֵי־יָ֑ם אַדִּ֖יר בַּמָּר֣וֹם יְהוָֽה",
                            en: "More than the voices of many waters, than the mighty waves of the sea, God on high is mighty.",
                            fr: "Les mers disent : Plus que le tumulte des eaux profondes et des puissantes vagues de la mer, l'Eternel est imposant dans les hauteurs.",
                        },
                        textSource: {
                            he: "תהלים צג ד",
                            en: "Psalms 93:4",
                            fr: "Psaumes 93:4",
                        },
                    }
                },
                {
                    cssClass: 'river',
                    texts: {
                        textSays: {
                            he: "נַהֲרוֹת אוֹמְרִים",
                            en: "The Rivers say",
                            fr: "Les fleuves disent",
                        },
                        textMain: {
                            he: "נְהָר֥וֹת יִמְחֲאוּ־כָ֑ף יַ֝֗חַד הָרִ֥ים יְרַנֵּֽנוּ",
                            en: "Let the rivers clap their hands, let the mountains sing for joy together!",
                            fr: "Les fleuves frapperont des mains à l'unisson du chant des montagnes.",
                        },
                        textSource: {
                            he: "תהלים צח ח",
                            en: "Psalms 98:8",
                            fr: "Psaumes 98:8",
                        },
                    }
                },
                {
                    cssClass: 'spring-water',
                    texts: {
                        textSays: {
                            he: "מַעְיָנוֹת אוֹמְרִים",
                            en: "The Wellsprings say",
                            fr: "Les sources disent",
                        },
                        textMain: {
                            he: "וְשָׁרִ֥ים כְּחֹלְלִ֑ים כָּֽל־מַעְיָנַ֥י בָּֽךְ",
                            en: "And as singers who are like dancers are all those who study You.",
                            fr: "Chanteurs et joueurs d'instruments de s'écrier : \"Toutes nos sources de bonheur sont en Toi !\".",
                        },
                        textSource: {
                            he: "תהלים פז ז",
                            en: "Psalms 87:7",
                            fr: "Psaumes 87:7",
                        },
                    }
                },
                {
                    cssClass: 'special chapter chapter2 galaxy',
                    special: {
                        title: {
                            he: "פרק שני",
                            en: "Chapter 2",
                            fr: "Chapitre 2"
                        }
                    }
                },
                {
                    cssClass: 'day',
                    texts: {
                        textSays: {
                            he: "יוֹם אוֹמֵר",
                            en: "The Day says",
                            fr: "Le jour dit",
                        },
                        textMain: {
                            he: "יוֹם לְיוֹם יַבִּיעַ אֹמֶר וְלַיְלָה לְּלַיְלָה יְחַוֶּה דָּעַת",
                            en: "Day to day utters speech, and night to night relates knowledge.",
                            fr: "Le jour en fait le récit au jour et la nuit le fait savoir à la nuit.",
                        },
                        textSource: {
                            he: "תהלים יט ג",
                            en: "Psalms 19:3",
                            fr: "Psaumes 19:3",
                        },
                    }
                },
                {
                    cssClass: 'night',
                    texts: {
                        textSays: {
                            he: "לַיְלָה אוֹמֵר",
                            en: "The Night says",
                            fr: "La nuit dit",
                        },
                        textMain: {
                            he: "לְהַגִּיד בַּבֹּקֶר חַסְדֶּךָ וֶאֱמוּנָתְךָ בַּלֵילוֹת",
                            en: "To speak of His kindness in the morning, and of His faithfulness by nights.",
                            fr: "Il est beau d'annoncer dès le matin Ta bonté et Ta bienveillance pendant les nuits",
                        },
                        textSource: {
                            he: "תהלים תב ג",
                            en: "Psalms 92:3",
                            fr: "Psaumes 92:3",
                        },
                    }
                },
                {
                    cssClass: 'sun',
                    texts: {
                        textSays: {
                            he: "שֶׁמֶשׁ אוֹמֵר",
                            en: "The Sun says",
                            fr: "Le Soleil dit",
                        },
                        textMain: {
                            he: "שֶׁמֶשׁ יָרֵחַ עָמַד זְבֻלָה לְאוֹר חִצֶּיךָ יְהַלֵּכוּ לְנֹגַהּ בְּרַק חֲנִיתֶּךָ",
                            en: "The sun, [when covered by] the moon, stood in its abode; they speed at the light of Your arrows, and at the shining of Your glittering spear.",
                            fr: "Le soleil et la lune s'arrêtent dans leur orbite à la lumière de Tes flêches, à la clarté fulgurante de Ta lance.",
                        },
                        textSource: {
                            he: "חבקוק ג יא",
                            en: "Habakuk 3:11",
                            fr: "Habakouk 3:11",
                        },
                    }
                },
                {
                    cssClass: 'moon',
                    texts: {
                        textSays: {
                            he: "יָרֵחַ אוֹמֶרֶת",
                            en: "The Moon says",
                            fr: "La lune dit",
                        },
                        textMain: {
                            he: "עָשָׂה יָרֵחַ לְמוֹעֲדִים שֶׁמֶשׁ יָדַע מְבוֹאוֹ",
                            en: "He made the moon for the festivals; the sun knows the time of its coming.",
                            fr: "Il a créé la lune pour fixer Ses fêtes et le soleil connaît le terme de sa course.",
                        },
                        textSource: {
                            he: "תהלים קד יט",
                            en: "Psalms 104:19",
                            fr: "Psaumes 104:19",
                        },
                    }
                },
                {
                    cssClass: 'stars',
                    texts: {
                        textSays: {
                            he: "כּוֹכָבִים אוֹמְרִים",
                            en: "The Stars say",
                            fr: "Les étoiles disent",
                        },
                        textMain: {
                            he: "אַתָּה הוּא יי לְבַדֶּךָ אַתָּה עָשִׂיתָ אֶת הַשָּׁמַיִם שְׁמֵי הַשָּׁמַיִם וְכָל צְבָאָם הָאָרֶץ וְכָל אֲשֶׁר עָלֶיהָ הַיַּמִּים וְכָל אֲשֶׁר בָּהֶם וְאַתָּה מְחַיֶּה אֶת כֻּלָּם וּצְבָא הַשָּׁמַיִם לְךָ מִשְׁתַּחֲוִים",
                            en: "You, only You, are God; You made heaven, the heaven of heavens, with all their host; the earth, and everything that is in it; the seas, and everything that is in them; and You preserve them all; and the host of heaven prostrate themselves to You.",
                            fr: "C'est Toi seul qui est l'Eternel, c'est Toi qui a créé les cieux, la voûte céleste des cieux et leurs armées, la terre et tout ce qui l'habite, les mers et tout ce qu'elles renferment. Tu donnes la vie à tous les êtres et les armées célestes se prosternent devant Toi.",
                        },
                        textSource: {
                            he: "נחמיה ט ו",
                            en: "Nehemiah 9:6",
                            fr: "Néhémie 9:6",
                        },
                    }
                },
                {
                    cssClass: 'clouds',
                    texts: {
                        textSays: {
                            he: "עָבִים אוֹמְרִים",
                            en: "The Clouds say",
                            fr: "Les nuages disent",
                        },
                        textMain: {
                            he: "יָשֶׁת חֹשֶׁךְ סִתְרוֹ סְבִיבוֹתָיו סֻכָּתוֹ חֶשְׁכַת מַיִם עָבֵי שְׁחָקִים",
                            en: "He made darkness His secret place; His pavilion around Him was dark with waters and thick clouds of the skies.",
                            fr: "Des ténèbres Il se fait une mystérieuse retraite, de l'obscurité des eaux et des nuages Il s'enveloppe comme d'un pavillon.",
                        },
                        textSource: {
                            he: "תהלים יח ב",
                            en: "Psalms 18:12",
                            fr: "Psaumes 18:12",
                        },
                    }
                },
                {
                    cssClass: 'glory-clouds',
                    texts: {
                        textSays: {
                            he: "עַנְנֵי כָּבוֹד אוֹמְרִים",
                            en: "The Clouds of Glory say",
                            fr: "Les nuées de gloire disent",
                        },
                        textMain: {
                            he: "אַף בְּרִי יַטְרִיחַ עָב יָפִיץ עֲנַן אוֹרוֹ",
                            en: "Also He burdens the thick cloud with an overflow; the cloud scatters its light.",
                            fr: "Il charge aussi la nuée de vapeurs humides et disperse les nuages traversés d'éclairs.",
                        },
                        textSource: {
                            he: "איוב לז יא",
                            en: "Job 37:11",
                            fr: "Job 37:11",
                        },
                    }
                },
                {
                    cssClass: 'wind',
                    texts: {
                        textSays: {
                            he: "רוּחַ אוֹמֵר",
                            en: "The Wind says",
                            fr: "Le vent dit",
                        },
                        textMain: {
                            he: "לַצָּפוֹן תֵּנִי וּלְתֵימָן אַל תִּכְלָאִי הָבִיאִי בָנַי מֵרָחוֹק וּבְנוֹתַי מִקְצֵה הָאָרֶץ",
                            en: "I will say to the north, Give up; and to the south, Do not withhold; bring My sons from far, and My daughters from the ends of the earth.",
                            fr: "Je dirai au nord : \"Donne\" ! Au sud : \"Ne les garde pas prisonniers\" ! Ramène mes fils des pays lointains et mes filles des extrémités de la terre !",
                        },
                        textSource: {
                            he: "ישעיה מג ו",
                            en: "Isaiah 43:6",
                            fr: "Isaïe 43:6",
                        },
                    }
                },
                {
                    cssClass: 'lightnings',
                    texts: {
                        textSays: {
                            he: "בְּרָקִים אוֹמְרִים",
                            en: "The Lightning Bolts say",
                            fr: "Les éclairs disent",
                        },
                        textMain: {
                            he: "בְּרָקִים לַמָּטָר עָשָׂה מוֹצֵא רוּחַ מֵאוֹצְרוֹ",
                            en: "He causes the vapors to ascend from the ends of the earth; He makes lightning for the rain; He brings forth the wind from His storehouses.",
                            fr: "Il accompagne la pluie d'éclairs et fait jaillir le vent de ses réservoirs",
                        },
                        textSource: {
                            he: "תהלים קלה ז",
                            en: "Psalms 135:7",
                            fr: "Psaumes 135:7",
                        },
                    }
                },
                {
                    cssClass: 'dew',
                    texts: {
                        textSays: {
                            he: "טַל אוֹמֵר",
                            en: "The Dew says",
                            fr: "La rosée dit",
                        },
                        textMain: {
                            he: "אֶהְיֶה כַטַּל לְיִשְׂרָאֵל יִפְרַח כַּשּׁוֹשַׁנָּה וְיַךְ שָׁרָשָׁיו כַּלְּבָנוֹן",
                            en: "I shall be as the dew to Israel, he shall blossom as a rose, he shall spread forth his roots as the Lebanon.",
                            fr: "Je serai pour Israël comme la rosée. Il fleurira comme la rose et plantera ses racines comme le cèdre du Liban.",
                        },
                        textSource: {
                            he: "הושע יד ו",
                            en: "Hoshea 14:6",
                            fr: "Osée 14:6",
                        },
                    }
                },
                {
                    cssClass: 'rain',
                    texts: {
                        textSays: {
                            he: "גְּשָׁמִים אוֹמְרִים",
                            en: "The Rains say",
                            fr: "La pluie dit",
                        },
                        textMain: {
                            he: "גֶּשֶׁם נְדָבוֹת תָּנִיף אֱלֹהִים נַחֲלָתְךָ וְנִלְאָה אַתָּה כוֹנַנְתָּ",
                            en: "You, O Lord, poured a generous rain, to strengthen Your heritage when it languished.",
                            fr: "Ô Dieu ! Fais ruisseler des pluies généreuses, ainsi tu rétabliras ton héritage si affaibli !",
                        },
                        textSource: {
                            he: "תהלים סח י",
                            en: "Psalms 68:10",
                            fr: "Psaumes 68:10",
                        },
                    }
                },
                {
                    cssClass: 'special chapter chapter3 galaxy',
                    special: {
                        title: {
                            he: "פרק שלישי",
                            en: "Chapter 3",
                            fr: "Chapitre 3"
                        }
                    }
                },
                {
                    cssClass: 'trees-fields',
                    texts: {
                        textSays: {
                            he: "אִילָנוֹת שֶׁבְּשָׂדֶה אוֹמְרִים",
                            en: "The Wild Trees say",
                            fr: "Les arbres disent",
                        },
                        textMain: {
                            he: "אָז יְרַנְּנוּ עֲצֵי הַיָּעַר מִלִּפְנֵי יי כִּי בָא לִשְׁפּוֹט אֶת הָאָרֶץ",
                            en: "Then shall the trees of the forest sing out at the presence of God, because He comes to judge the earth.",
                            fr: "Alors les arbres de la forêt résonneront à l'approche de l'Eternel car Il vient pour juger la terre.",
                        },
                        textSource: {
                            he: "דברי הימים א טז לח",
                            en: "Chronicles I, 16:33",
                            fr: "Chroniques I, 16:33",
                        },
                    }
                },
                {
                    cssClass: 'vine',
                    texts: {
                        textSays: {
                            he: "גֶּפֶן אוֹמֶרֶת",
                            en: "The Vine says",
                            fr: "La vigne dit",
                        },
                        textMain: {
                            he: "כֹּה אָמַר יי כַּאֲשֶׁר יִמָּצֵא הַתִּירוֹשׁ בָּאֶשְׁכּוֹל וְאָמַר אַל תַּשְׁחִיתֵהוּ כִּי בְרָכָה בּוֹ כֵּן אֶעֱשֶׂה לְמַעַן עֲבָדַי לְבִלְתִּי הַשְׁחִית הַכֹּל",
                            en: "So says God: As the wine is found in the cluster, and one says: Do not destroy it, for a blessing is in it &mdash; so shall I do for the sake of my servants, so as not to destroy eveiything.",
                            fr: "Ainsi parle l'Eternel : Tout comme lorsqu'on trouve un grain de raisin dans sa grappe et que l'on dit - Ne la détruit pas car c'est un fruit béni - ainsi je me comporterai avec mes serviteurs et je ne les détruirai pas tous",
                        },
                        textSource: {
                            he: "ישעיה סח ח",
                            en: "Isaiah 65:8",
                            fr: "Isaïe 65:8",
                        },
                    }
                },
                {
                    cssClass: 'fig-tree',
                    texts: {
                        textSays: {
                            he: "תְּאֵנָה אוֹמֶרֶת",
                            en: "The Fig says",
                            fr: "La figue dit",
                        },
                        textMain: {
                            he: "נֹצֵר תְּאֵנָה יֹאכַל פִּרְיָהּ",
                            en: "The one who guards the fig shall eat of her fruits.",
                            fr: "Celui qui veille sur le figuier jouira de ses fruits",
                        },
                        textSource: {
                            he: "משלי כז יח",
                            en: "Proverbs 27:18",
                            fr: "Proverbes 27:18",
                        },
                    }
                },
                {
                    cssClass: 'pomegranate-tree',
                    texts: {
                        textSays: {
                            he: "רִמּוֹן אוֹמֵר",
                            en: "The Pomegranate says",
                            fr: "La grenade dit",
                        },
                        textMain: {
                            he: "כְּפֶלַח הָרִמּוֹן רַקָּתֵךְ מִבַּעַד לְצַמָּתֵךְ",
                            en: "Your cheeks are like a piece of a pomegranate behind your veil.",
                            fr: "Ta tempe est comme une tranche de grenade à travers les tresses de tes cheveux",
                        },
                        textSource: {
                            he: "שיר השירים ד ג",
                            en: "Song of Songs 4:3",
                            fr: "Cantique des cantiques 4:3",
                        },
                    }
                },
                {
                    cssClass: 'date-tree',
                    texts: {
                        textSays: {
                            he: "תָּמָר אוֹמֵר",
                            en: "The Date says",
                            fr: "La datte dit",
                        },
                        textMain: {
                            he: "צַדִּיק כַּתָּמָר יִפְרָח כְּאֶרֶז בַּלְּבָנוֹן יִשְׂגֶּה",
                            en: "The righteous flourish like the palm tree; they grow like a cedar in Lebanon.",
                            fr: "Le Juste fleurit comme le palmier, comme le cèdre du Liban il est élancé.",
                        },
                        textSource: {
                            he: "תהלים צב יג",
                            en: "Psalms 92:13",
                            fr: "Psaumes 92:13",
                        },
                    }
                },
                {
                    cssClass: 'apple-tree',
                    texts: {
                        textSays: {
                            he: "תַּפּוּחַ אוֹמֵר",
                            en: "The Apple says",
                            fr: "La pomme dit",
                        },
                        textMain: {
                            he: "כְּתַפּוּחַ בַּעֲצֵי הַיַּעַר כֵּן דּוֹדִי בֵּין הַבָּנִים בְּצִלּוֹ חִמַּדְתִּי וְיָשַׁבְתִּי וּפִרְיוֹ מָתוֹק לְחִכִּי",
                            en: "Like the apple among the trees of the forest, so is my beloved among the young men. I yearned for and sat in his proximity, and his fruit is sweet to my palate.",
                            fr: "Comme un pommier parmi les arbres de la forêt, tel est mon bien aimé parmi les jeunes gens. J'ai brûlé du désir de m'assoir sous son ombrages et son fruit est doux à mon palais.",
                        },
                        textSource: {
                            he: "שיר השירים ב ג",
                            en: "Song of Songs 2:3",
                            fr: "Cantique des cantiques 2:3",
                        },
                    }
                },
                {
                    cssClass: 'wheat',
                    texts: {
                        textSays: {
                            he: "שִׁבֹּלֶת חִטִּים אוֹמֶרֶת",
                            en: "The Sheaves of Wheat say",
                            fr: "Les épis de blé disent",
                        },
                        textMain: {
                            he: "שִׁיר הַמַּעֲלוֹת מִמַּעֲמַקִּים קְרָאתִיךָ יְהוָה",
                            en: "A song of ascents: Out of the depths have I cried to You, O God.",
                            fr: "Cantique des degrés. Des profondeurs de l'abîme, je T'ai invoqué Ô Eternel !",
                        },
                        textSource: {
                            he: "תהלים קל א",
                            en: "Psalms 130:1",
                            fr: "Psaumes 130:1",
                        },
                    }
                },
                {
                    cssClass: 'barley',
                    texts: {
                        textSays: {
                            he: "שִׁבֹּלֶת שְׂעוֹרִים אוֹמֶרֶת",
                            en: "The Sheaves of Barley say",
                            fr: "Les épis d'orge disent",
                        },
                        textMain: {
                            he: "תְּפִלָּה לְעָנִי כִי יַעֲטֹף וְלִפְנֵי יְהוָה יִשְׁפֹּךְ שִׂיחוֹ",
                            en: "A prayer of the pauper, when he swoons, and pours out his speech before God.",
                            fr: "Prière d'un malheureux qui se sent défaillir et épanche sa plainte devant l'Eternel.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'cereals',
                    texts: {
                        textSays: {
                            he: "שְׁאַר השִׁבּוֹלִים אוֹמְרִים",
                            en: "The Other Sheaves say",
                            fr: "Les autres épis disent",
                        },
                        textMain: {
                            he: "לָבְשׁוּ כָרִים הַצֹּאן וַעֲמָקִים יַעַטְפוּ בָר יִתְרוֹעֲעוּ אַף יָשִׁירוּ",
                            en: "The meadows are clothed with flocks; the valleys also are covered over with grain; they shout for joy, they also sing.",
                            fr: "Les prairies sont revêtues de troupeaux, les vallées se couvrent de céréales. Partout des clameurs de joie et des chants !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'vegetables',
                    texts: {
                        textSays: {
                            he: "יְרָקוֹת שֶׁבַּשָּׂדֶה אוֹמְרִים",
                            en: "The Vegetables of the Field say",
                            fr: "Les légumes des champs disent",
                        },
                        textMain: {
                            he: "תְּלָמֶיהָ רַוֵּה נַחֵת גְּדוּדֶיהָ בִּרְבִיבִים תְּמֹגְגֶנָּה צִמְחָהּ תְּבָרֵךְ",
                            en: "You water its furrows abundantly; You settle its ridges; you make it soft with showers; You bless its growth.",
                            fr: "Tu inondes les sillons. Tu écrases les mottes de terre par des ondées et Tu bénis les plantations !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'pastures',
                    texts: {
                        textSays: {
                            he: "דְּשָׁאִים אוֹמְרִים",
                            en: "The Grasses say",
                            fr: "Les prairies disent",
                        },
                        textMain: {
                            he: "יְהִי כְבוֹד יְהוָה לְעוֹלָם יִשְׂמַח יְהוָה בְּמַעֲשָׂיו",
                            en: "May the glory of God endure forever; may God rejoice in His works.",
                            fr: "Que la gloire de l'Eternel dure à jamais. Que Dieu se réjouisse de Ses oeuvres !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'special chapter chapter4 galaxy',
                    special: {
                        title: {
                            he: "פרק רביעי",
                            en: "Chapter 4",
                            fr: "Chapitre 4"
                        }
                    }
                },
                {
                    cssClass: 'rooster',
                    texts: {
                        textSays: {
                            he: "תַּרְנְגוֹל אוֹמֵר",
                            en: "The Rooster says",
                            fr: "Le coq dit",
                        },
                        textMain: {
                            he: `בְּשָׁעָה שֶׁבָּא הַקָּדוֹשׁ בָּרוּךְ הוּא אֵצֶל הַצַּדִּיקִים בְּגַן עֵדֶן, זוֹלְפִים כֹּל אִילָנֵי גַּן עֵדֶן בַּשָּׁמַיִם, וּמְרַנְּנִים וּמְשַׁבְּחִים, וְאָז גַּם הוּא מִתְעוֹרֵר וּמְשַׁבֵּחַ׃ (זוהר ב קצה:ב, ויקהל)
                                <p>בְּקוֹל רִאשׁוֹן אוֹמֵר. זֶה דּוֹר דֹּרְשָׁו מְבַקְשֵׁי פָנֶיךָ יַעֲקֹב סֶלָה׃ שְׂאוּ שְׁעָרִים רָאשֵׁיכֶם וְהִנָּשְׂאוּ פִּתְחֵי עוֹלָם וְיָבוֹא מֶלֶךְ הַכָּבוֹד׃ מִי זֶה מֶלֶךְ הַכָּבוֹד יהוה עִזּוּז וְגִבּוֹר יהוה גִּבּוֹר מִלְחָמָה׃ (תהלים כד ז-ח)</p>
                                <p>בְּקוֹל שֵׁנִי אוֹמֵר. שְׂאוּ שְׁעָרִים רָאשֵׁיכֶם וּשְׂאוּ פִּתְחֵי עוֹלָם וְיָבֹא מֶלֶךְ הַכָּבוֹד׃ מִי הוּא זֶה מֶלֶךְ הַכָּבוֹד יהוה צְבָאוֹת הוּא מֶלֶךְ הַכָּבוֹד סֶלָה׃ (תהלים כד ט-י)</p>
                                <p>בְּקוֹל שְׁלִישִׁי אוֹמֵר. עִמְדוּ צַדִּיקִים וְעִסְקוֹ בַּתּוֹרָה, כְּדֵי שֶׁיִּהְיֶה שְׂכַרְכֶם כָּפוּל לָעוֹלָם הַבָּא׃</p>
                                <p>בְּקוֹל רְבִיעִי אוֹמֵר. לִישׁוּעָתְךָ קִוִּיתִי יהוה׃ (בראשית מט יח)</p>
                                <p>בְּקוֹל חֲמִישִׁי אוֹמֵר. עַד מָתַי עָצֵל תִּשְׁכָּב מָתַי תָּקוּם מִשְּׁנָתֶךָ׃ (משלי ו ט)</p>
                                <p>בְּקוֹל שִׂישִׂי אוֹמֵר. אַל תֶּאֱהַב שֵׁנָה פֶּן תִּוָּרֵשׁ פְּקַח עֵינֶיךָ שְׂבַע לָחֶם׃ (משלי כ יג)</p>
                                <p>בְּקוֹל שְׁבִיעִי אוֹמֵר. עֵת לַעֲשׂוֹת לַיהוה הֵפֵרוּ תּוֹרָתֶךָ׃ (תהלים קיט קכו)</p>`,
                            en: `When the Holy One, blessed be He, comes to the righteous in the Garden of Eden, all the trees in the Garden of Eden scatter their spices, and they rejoice and praise, and then He, too, is aroused and praises.&rdquo; <span class="quote-source">(Zohar, Vayakhel, 195)</span></span>
                                <p>In its first call it says: &ldquo;Lift up your heads, O gates! And be lifted up, O everlasting doors! And the King of glory shall come in. Who is this King of glory? God strong and mighty, God mighty in battle!&rdquo; <span class="quote-source">(Psalms 24:7-8)</span></p>
                                <p>In its second call, it says: &ldquo;Lift up your heads, O gates! Lift them up, O everlasting doors! And the King of glory shall come in. Who is He, this King of glory? God of hosts, He is the King of glory, Selah!&rdquo; <span class="quote-source">(Psalms 24:9-10)</span></p>
                                <p>In its third call it says: &ldquo;Stand, O righteous ones, and busy yourselves with Torah, so that your reward shall be double in the World-to-Come.&rdquo; </p>
                                <p>In its fourth call it says: &ldquo;I have hoped for your salvation, O God.&rdquo; <span class="quote-source">(Genesis 49:18)</span></p>
                                <p>In its fifth call, it says: &ldquo;How long will you sleep, O sluggard? When will you arise from your sleep?&rdquo; <span class="quote-source">(Proverbs 6:9)</span></p>
                                <p>In its sixth call, it says: &ldquo;Do not love sleep, lest you come to poverty; open your eyes, and you shall be satisfied with bread.&rdquo; <span class="quote-source">(Proverbs 20:13)</span></p>
                                <p>In its seventh call, it says: &ldquo;It is time to act for God; for they have made void Your Torah.&rdquo; <span class="quote-source">(Psalms 119:126)</span></p>`,
                            fr: `Au moment où le Saint béni Soit-Il se retrouve au jardin d'Eden avec les Justes, tous les arbres de jardin se répandent en parfums et chantent et louent Dieu. Alors le coq se réveille aussi et lui rend hommage.&rdquo; <span class="quote-source">(Zohar, Vayakhel, 195)</span></span>
                            <p>Au premier chant il dit : Rehaussez Ô portes vos frontons, relevez-vous portails antiques afin qu'entre le Roi de Gloire ! Qui est donc ce Roi de Gloire ? L'Eternel fort et puissant, l'Eternel héros de guerre !&rdquo; <span class="quote-source">(Psaumes 24:7-8)</span></p>
                            <p>Au deuxième chant il dit : Rehaussez Ô portes vos frontons, relevez-vous portails antiques afin qu'entre le Roi de Gloire ! Qui est donc ce Roi de Gloire ? L'Eternel Dieu des armées célestes, c'est le Roi de Gloire à tout jamais !&rdquo; <span class="quote-source">(Psaumes 24:9-10)</span></p>
                            <p>Au troisième chant il dit : Justes, levez vous et consacrez vous à la Torah afin que votre récompense soit doublée dans le monde futur !</p>
                            <p>Au quatrième chant il dit : Sur ton salut je compte Ô Eternel !<span class="quote-source">(Genesis 49:18)</span></p>
                            <p>Au cinquième chant il dit : Paresseux ! Jusqu'à quand resteras tu couché ? Quand t'éveilleras tu de ton sommeil ? <span class="quote-source">(Proverbes 6:9)</span></p>
                            <p>Au sixième chant il dit : Ne désire pas trop de sommeil. Ouvre tes yeux et tu auras du pain en abondance. <span class="quote-source">(Proverbes 20:13)</span></p>
                            <p>Au septième chant il dit : Le temps est venu d'agir pour l'Eternel ! On a violé Ta loi ! <span class="quote-source">(Psaumes 119:126)</span></p>`,
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'hen',
                    texts: {
                        textSays: {
                            he: "תַּרְנְגֹלֶת אוֹמֶרֶת",
                            en: "The Hen says",
                            fr: "La poule dit",
                        },
                        textMain: {
                            he: "נֹתֵן לֶחֶם לְכָל בָּשָׂר כִּי לְעוֹלָם חַסְדּוֹ",
                            en: "He gives bread to all flesh, for His kindness endures forever.",
                            fr: "Dieu donne du pain à toutes Ses créatures car Sa bonté est éternelle.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'dove',
                    texts: {
                        textSays: {
                            he: "יוֹנָה אוֹמֶרֶת",
                            en: "The Dove says",
                            fr: "La colombe dit",
                        },
                        textMain: {
                            he: `כְּסוּס עָגוּר כֵּן אֲצַפְצֵף אֶהְגֶּה כַּיּוֹנָה דַּלּוּ עֵינַי לַמָּרוֹם אֲדֹנָי עָשְׁקָה לִּי עָרְבֵנִי׃ (ישעיה לח, יד)<br>אוֹמֶרֶת יוֹנָה לִפְנֵי הַקָּדוֹשׁ בָּרוּךְ הוּא רִבּוֹנוֹ שֶׁל עוֹלַם יִהְיוּ מְזוֹנוֹתַי מְרוֹרִים כְּזַיִת בְּיָדְךָ וְאַל יִהְיוּ מְתוּקִים כִּדְבַשׁ עַל יְדֵי בַּשָּׁר וְדָם`,
                            en: "Like a swift or crane, so do I chatter; I moan like a dove; my eyes fail with looking upward; O God, I am oppressed, be my senility.&rdquo; <span class='quote-source'>(Isaiah 38:14)</span><br>The dove says before The Holy One, Blessed be He: &ldquo;Master of the World! May my sustenance be as bitter as an olive in Your Hand, rather than it being sweet as honey through flesh and blood.",
                            fr: "Ainsi qu'une hirondelle je gémissais, je roucoulais comme une colombe, mes yeux s'élevaient vers Toi Eternel ! Je suis accablée Sois mon garant ! <span class='quote-source'>(Isaïe 38:14)</span><br>La colombe dit devant l'Eternel : Maître du monde ! Que ma subsistance soit amère comme l'olive mais prodiguée par Ta main, plutôt que douce comme le miel par la main de l'homme !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'eagle',
                    texts: {
                        textSays: {
                            he: "נֶשֶׁר אוֹמֵר",
                            en: "The Eagle says",
                            fr: "L'aigle dit",
                        },
                        textMain: {
                            he: "וְאַתָּה יְהוָה אֱלֹהִים צְבָאוֹת אֱלֹהֵי יִשְׂרָאֵל הָקִיצָה לִפְקֹד כָּל הַגּוֹיִם אַל תָּחֹן כָּל בֹּגְדֵי אָוֶן סֶלָה",
                            en: "And You, God, Lord of Hosts, Lord of Israel, awake to punish all the nations; do not be gracious to any wicked traitors, Selah!",
                            fr: "Tu es bien l'Eternel tout puissant, le Dieu d'Israêl ! Réveille toi pour châtier tout ces peuples, n'épargne aucun de ces malfaiteurs à tout jamais !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'heron',
                    texts: {
                        textSays: {
                            he: "עָגוּר אוֹמֵר",
                            en: "The Crane says",
                            fr: "La grue dit",
                        },
                        textMain: {
                            he: "הוֹדוּ לַיהוָה בְּכִנּוֹר בְּנֵבֶל עָשׂוֹר זַמְּרוּ לוֹ",
                            en: "Give thanks to God with the lyre, make music for Him with the ten-stringed harp.",
                            fr: "Rendez hommage à l'Eternel avec la harpe ! Célébrez le par le luth à dix cordes !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'swallow',
                    texts: {
                        textSays: {
                            he: "צִפּוֹר אוֹמֵר",
                            en: "The Bird says",
                            fr: "L'oiseau dit",
                        },
                        textMain: {
                            he: "גַּם צִפּוֹר מָצְאָה בַיִת וּדְרוֹר קֵן לָהּ אֲשֶׁר שָׁתָה אֶפְרֹחֶיהָ אֶת מִזְבְּחוֹתֶיךָ יְהוָה צְבָאוֹת מַלְכִּי וֵאלֹהָי",
                            en: "The songbird has also found her home, and the sparrow a nest for herself, where she may lay her young &mdash; Your altars, God of Hosts, my King and my Lord.",
                            fr: "Même l'oiseau a trouvé un abri, le passereau un nid où il garde ses petits. Moi je rêvais de tes autels Eternel, Roi des armées célestes, mon Roi et mon Dieu !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'sparrow',
                    texts: {
                        textSays: {
                            he: "סְנוּנִית אוֹמֶרֶת",
                            en: "The Swallow says",
                            fr: "L'hirondelle dit",
                        },
                        textMain: {
                            he: "לְמַעַן יְזַמֶּרְךָ כָבוֹד וְלֹא יִדֹּם יְהוָה אֱלֹהַי לְעוֹלָם אוֹדֶךָּ",
                            en: "So that my soul shall praise You, and shall not be silent, God my Lord, I shall give thanks to You forever.",
                            fr: "De la sorte mon âme chante Ta gloire sans relâche Eternel mon Dieu à tout jamais je Te louerai !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'albatross',
                    texts: {
                        textSays: {
                            he: "טַסִּית אוֹמֶרֶת",
                            en: "The Swift says",
                            fr: "Le martinet dit",
                        },
                        textMain: {
                            he: "עֶזְרִי מֵעִם יְהוָה עֹשֵׂה שָׁמַיִם וָאָרֶץ",
                            en: "My help is from God, Maker of Heaven and earth.",
                            fr: "Mon secours vient de l'Eternel qui a créé le ciel et la terre !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'petrel',
                    texts: {
                        textSays: {
                            he: "צִיָּה אוֹמֶרֶת",
                            en: "The Petrel says",
                            fr: "Le pétrel dit",
                        },
                        textMain: {
                            he: "אוֹר זָרֻעַ לַצַּדִּיק וּלְיִשְׁרֵי לֵב שִׂמְחָה",
                            en: "Light is sown for the righteous, and joy for the straight-hearted.",
                            fr: "La lumière se répand sur les Justes et la joie sur les coeurs droits.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'owl',
                    texts: {
                        textSays: {
                            he: "רְצִפִי אוֹמֵר",
                            en: "The Owl says",
                            fr: "Le Hibou dit",
                        },
                        textMain: {
                            he: "נַחֲמוּ נַחֲמוּ עַמִּי יֹאמַר אֱלֹהֵיכֶם",
                            en: "Be comforted, My people, be comforted, says your God.",
                            fr: "Consolez, consolez mon peuple dit votre Dieu !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'stork',
                    texts: {
                        textSays: {
                            he: "חֲסִידָה אוֹמֶרֶת",
                            en: "The Stork says",
                            fr: "La cigogne dit",
                        },
                        textMain: {
                            he: "דַּבְּרוּ עַל לֵב יְרוּשָׁלַים וְקִרְאוּ אֵלֶיהָ כִּי מָלְאָה צְבָאָהּ כִּי נִרְצָה עֲוֹנָהּ כִּי לָקְחָה מִיַּד יְהוָה כִּפְלַיִם בְּכָל חַטֹּאתֶיהָ",
                            en: "Speak to the heart of Jerusalem, and call to her, for her time has arrived, for her sins have been pardoned, for she has taken double from God&rsquo;s hand for all her sins.",
                            fr: "Parlez au coeur de Jerusalem et criez lui que son temps d'épreuves est fini, que son pêché est pardonné car elle a reçu double peine pour toutes ses fautes.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'crow',
                    texts: {
                        textSays: {
                            he: "עוֹרֵב אוֹמֵר",
                            en: "The Crow says",
                            fr: "Le corbeau dit",
                        },
                        textMain: {
                            he: "מִי יָכִין לָעֹרֵב צֵידוֹ כִּי יְלָדָיו אֶל אֵל יְשַׁוֵּעוּ יִתְעוּ לִבְלִי אֹכֶל",
                            en: "Who prepares food for the raven, when his young ones cry out to God?",
                            fr: "Qui prépare au corbeau sa pitance quand ses petits crient vers Dieu et errent sans rien manger ?",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'starling',
                    texts: {
                        textSays: {
                            he: "זַרְזִיר אוֹמֵר",
                            en: "The Starling says",
                            fr: "L'étourneau dit",
                        },
                        textMain: {
                            he: "וְנוֹדַע בַּגּוֹיִם זַרְעָם וְצֶאֱצָאֵיהֶם בְּתוֹךְ הָעַמִּים כָּל רֹאֵיהֶם יַכִּירוּם כִּי הֵם זֶרַע בֵּרַךְ יְהוָה",
                            en: "Their seed shall be known among the nations, and their offspring among the peoples; all who see them shall acknowledge them, that they are the seed which God has blessed.",
                            fr: "Ainsi leur postérité sera remarquée parmi les nations et leurs descendants parmi les peuples. Tous ceux qui les verront les reconnaîtront comme une race bénie de Dieu.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'goose',
                    texts: {
                        textSays: {
                            he: "אֲוַז שֶׁבַּבַּיִת אוֹמֶרֶת",
                            en: "The Domestic Goose says",
                            fr: "L'oie domestique dit",
                        },
                        textMain: {
                            he: "הוֹדוּ לַיהוָה קִרְאוּ בִּשְׁמוֹ הוֹדִיעוּ בָעַמִּים עֲלִילוֹתָיו׃ שִׁירוּ לוֹ זַמְּרוּ לוֹ שִׂיחוּ בְּכָל נִפְלְאוֹתָיו׃",
                            en: "Give thanks to God, call upon His Name, make His works known amongst the peoples, sing to Him, make music for Him, speak of all His wonders.",
                            fr: "Rendez hommage à l'Eternel ! Invoquez Son Nom, faites connaître ses hauts faits, entretenez vous de toutes Ses merveilles !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'goose-wild',
                    texts: {
                        textSays: {
                            he: "אֲוַז הַבָּר הַמְּשׁוֹטֶטֶת בַּמִּדְבָּר. כְּשֶׁרוֹאֵה אֶת יִשְׂרָאֵל עוֹסְקִים בַּתּוֹרָה אוֹמֶרֶת",
                            en: "The Wild Goose flying in the wilderness, when it sees Israel busy with Torah, says",
                            fr: "L'oie sauvage se déplaçant dans le désert voit qu'Israël se consacre à l'étude de la Torah et elle dit",
                        },
                        textMain: {
                            he: "קוֹל קוֹרֵא בַּמִּדְבָּר פָּנוּ דֶּרֶךְ יי יַשְׁרוּ בַּעֲרָבָה מְסִלָּה לֶאֱלֹהֵינוּ וְעַל מְצִיאוּת מְזוֹנוֹתֶיהָ בַּמִּדְבָּר אוֹמֶרֶת. אָרוּר הַגֶּבֶר אַשֵּׁר יִבְטַח בָּאָדָם בָּרוּךְ הַגֶּבֶר אֲשֶׁר יִבְטַח בְּיי וְהָיָה יי מִבְטָחוֹ",
                            en: "A voice cries, Prepare in the desert the way of God, make straight in the desert a path for our God.",
                            fr: "Une voix proclame dans le désert déblayez la route pour l'Eternel ! Nivelez dans la campagne un passage pour notre Dieu ! Quant à la difficulté de trouver sa nourriture dans le désert elle dit : Maudit soit l'homme qui place sa confiance en un mortel ! Béni celui qui se confie en l'Eternel et dont l'Eternel est l'espoir !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'chicken',
                    texts: {
                        textSays: {
                            he: "פְרוֹגִיוֹת אוֹמְרִים",
                            en: "The chickens say",
                            fr: "Les canetons disent",
                        },
                        textMain: {
                            he: "בִּטְחוּ בַיהוָה עֲדֵי עַד כִּי בְּיָהּ יְהוָה צוּר עוֹלָמִים",
                            en: "Trust in God forever, for God, the Eternal, is the strength of worlds [the everlasting rock].",
                            fr: "Tous les rois de la terre Te loueront Eternel après avoir entendu les paroles de Ta bouche !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'cormorant',
                    texts: {
                        textSays: {
                            he: "רַחֲמָהּ אוֹמֶרֶת",
                            en: "The Egyptian vulture says",
                            fr: "Le percnoptère dit",
                        },
                        textMain: {
                            he: "אֶשְׁרְקָה לָהֶם וַאֲקַבְּצֵם כִּי פְדִיתִים וְרָבוּ כְּמוֹ רָבוּ",
                            en: "I will whistle to them and gather them, for I have redeemed them, and they shall increase as they have before increased.",
                            fr: "Je leur ferai entendre mon signal et je les rassemblerai car je les aurai rachetés et ils redeviendront nombreux comme ils l'ont été.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'locust',
                    texts: {
                        textSays: {
                            he: "צִפֹּרֶת כְּרָמִים אוֹמֶרֶת",
                            en: "The Grasshopper says",
                            fr: "Le criquet dit",
                        },
                        textMain: {
                            he: "אֶשָּׂא עֵינַי אֶל הֶהָרִים מֵאַיִן יָבֹא עֶזְרִי",
                            en: "I lift my eyes up to the mountains, where shall my help come from?",
                            fr: "Je lève les yeux vers les montagnes pour voir d'où me viendra le secours.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'grasshopper',
                    texts: {
                        textSays: {
                            he: "חָסִיל אוֹמֵר",
                            en: "The Locust says",
                            fr: "La sauterelle dit",
                        },
                        textMain: {
                            he: "יְהוָה אֱלֹהַי אַתָּה אֲרוֹמִמְךָ אוֹדֶה שִׁמְךָ כִּי עָשִׂיתָ פֶּלֶא עֵצוֹת מֵרָחוֹק אֱמוּנָה אֹמֶן",
                            en: "O God, You are my Lord; I will exalt You, I will praise Your Name; for You have done wondrous things; Your counsels of old are faithfulness and truth.",
                            fr: "Eternel Tu es mon Dieu ! Je veux exalter et louer Ton Nom car tu as accompli des merveilles parfaitement fidèles aux résolutions d'antan.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'lizard',
                    texts: {
                        textSays: {
                            he: "שְׂמָמִית אוֹמֶרֶת",
                            en: "The Lizard says",
                            fr: "Le lézard dit",
                        },
                        textMain: {
                            he: "הַלְלוּהוּ בְצִלְצְלֵי שָׁמַע הַלְלוּהוּ בְּצִלְצְלֵי תְרוּעָה",
                            en: "Praise Him with sounding cymbals! Praise Him with loud clashing cymbals!",
                            fr: "Louez Le avec des cymbales sonores ! Louez Le avec des cymbales retentissantes !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'fly',
                    texts: {
                        textSays: {
                            he: "זְבוּב אוֹמֵר. בְּשָׁעָה שֶׁאֵין יִשְׂרָאֵל עוֹסְקִים בַּתּוֹרָה",
                            en: "The Fly, when Israel is not busying itself with Torah, says",
                            fr: "La mouche, quand elle voit qu'Israël délaisse l'étude de la Torah, dit",
                        },
                        textMain: {
                            he: `קוֹל אֹמֵר קְרָא וְאָמַר מָה אֶקְרָא כָּל הַבָּשָׂר חָצִיר וְכָל חַסְדּוֹ כְּצִיץ הַשָּׂדֶה׃ יָבֵשׁ חָצִיר נָבֵל צִיץ כִּי רוּחַ יְהוָה נָשְׁבָה בּוֹ אָכֵן חָצִיר הָעָם׃ יָבֵשׁ חָצִיר נָבֵל צִיץ וּדְבַר אֱלֹהֵינוּ יָקוּם לְעוֹלָם׃ (ישעיה מ, ו) :בּוֹרֵא נִיב שְׂפָתָיִם שָׁלוֹם שָׁלוֹם לָרָחוֹק וְלַקָּרוֹב אָמַר יְהוָה וּרְפָאתִיו`,
                            en: "A voice says: &lsquo;Call out.&rsquo; And he said, &lsquo;What shall I call out? All flesh is grass, and all its grace is as the flower of the field.&rsquo; &lsquo;...The grass withers, the flower fades; but the word of our Lord shall endure forever.",
                            fr: "Une voix dit : Proclame ! Et que proclamerai je ? Toute chair est comme l'herbe et sa bonté comme la fleur des champs. L'herbe se dessèche, la fleur se fane mais la parole de notre Dieu subsiste à jamais !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'cetacean',
                    texts: {
                        textSays: {
                            he: "תַּנִּינִים אוֹמְרִים",
                            en: "The Giant Sea Creatures say",
                            fr: "Les grands cétacés disent",
                        },
                        textMain: {
                            he: "הַלְלוּ אֶת יְהוָה מִן הָאָרֶץ תַּנִּינִים וְכָל תְּהֹמוֹת",
                            en: "Praise Hashem from the earth, the giant sea creatures and the depths.",
                            fr: "Louez l'Eternel depuis la terre et les profondes abysses !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'whale',
                    texts: {
                        textSays: {
                            he: "לִוְיָתַן אוֹמֵר",
                            en: "The Leviathan says",
                            fr: "Le Leviathan dit",
                        },
                        textMain: {
                            he: "הוֹדוּ לַיהוָה כִּי טוֹב כִּי לְעוֹלָם חַסְדּוֹ",
                            en: "Give thanks to God for He is good, for His kindness endures forever.",
                            fr: "Rendez grâce au Seigneur car Il est bon et Sa bonté est éternelle !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'fish',
                    texts: {
                        textSays: {
                            he: "דָּגִים אוֹמְרִים",
                            en: "The Fishes say",
                            fr: "Les poissons disent",
                        },
                        textMain: {
                            he: "קוֹל יְהוָה עַל הַמָּיִם אֵל הַכָּבוֹד הִרְעִים יְהוָה עַל מַיִם רַבִּים",
                            en: "The voice of God is upon the waters, the God of glory thunders, God is upon many waters.",
                            fr: "La voix de l'Eternel retentit sur les eaux ! Le Dieu de Gloire tonne sur les grandes eaux !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'frog',
                    texts: {
                        textSays: {
                            he: "צְפַרְדֵּעַ אוֹמֶרֶת",
                            en: "The Frog says",
                            fr: "La grenouille dit",
                        },
                        textMain: {
                            he: "בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד",
                            en: "Blessed is the Name of the honor of His Kingdom for all eternity.",
                            fr: "Que Le Nom béni de Son Règne soit béni à jamais !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'special chapter chapter5 galaxy',
                    special: {
                        title: {
                            he: "פרק חמישי",
                            en: "Chapter 5",
                            fr: "Chapitre 5"
                        }
                    }
                },
                {
                    cssClass: 'sheep',
                    texts: {
                        textSays: {
                            he: "בְּהֵמָה דַּקָּה טְהוֹרָה אוֹמֶרֶת",
                            en: "The pure small cattle says",
                            fr: "Le menu bétail pur dit",
                        },
                        textMain: {
                            he: "מִי כָמֹכָה בָּאֵלִם יְהוָה מִי כָּמֹכָה נֶאְדָּר בַּקֹּדֶשׁ נוֹרָא תְהִלֹּת עֹשֵׂה פֶלֶא",
                            en: "Who is like You among the mighty ones, God, who is like You, mighty in holiness, awesome in praise, worker of wonders.",
                            fr: "Qui est comme Toi parmi les puissants Ô Eternel ? Qui est comme Toi paré de Sainteté ? Inaccessible aux louanges opérant des merveilles ?",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'cows',
                    texts: {
                        textSays: {
                            he: "בְּהֵמָה גַּסָּה טְהוֹרָה אוֹמֶרֶת",
                            en: "The pure large cattle say",
                            fr: "Le gros bétail pur dit",
                        },
                        textMain: {
                            he: "הַרְנִינוּ לֵאלֹהִים עוּזֵּנוּ הָרִיעוּ לֵאלֹהֵי יַעֲקֹב",
                            en: "Rejoice to the Lord over our strength, trumpet to the Lord of Yaakov!",
                            fr: "Célébrez Dieu notre force ! Acclamez le Dieu de Jacob !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'pigs',
                    texts: {
                        textSays: {
                            he: "בְּהֵמָה דַּקָּה טְמֵאָה אוֹמֶרֶת",
                            en: "The impure small cattle says",
                            fr: "Le menu bétail impur dit",
                        },
                        textMain: {
                            he: "הֵיטִיבָה יְהוָה לַטּוֹבִים וְלִישָׁרִים בְּלִבּוֹתָם",
                            en: "God is good to the good, and to the straight-hearted",
                            fr: "L'Eternel fait du bien aux bons et à ceux qui ont le coeur droit.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'hippo',
                    texts: {
                        textSays: {
                            he: "בְּהֵמָה גַּסָּה טְמֵאָה אוֹמֶרֶת",
                            en: "The impure large cattle says",
                            fr: "Le gros bétail impur dit",
                        },
                        textMain: {
                            he: "יְגִיעַ כַּפֶּיךָ כִּי תֹאכֵל אַשְׁרֶיךָ וְטוֹב לָךְ",
                            en: "When you eat the fruit of your labors, happy are you and good is your lot.",
                            fr: "Le produit de ton travail tu mangeras et le bien sera ton partage.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'camel',
                    texts: {
                        textSays: {
                            he: "גַּמַּל אוֹמֵר",
                            en: "The Camel says",
                            fr: "Le chameau dit",
                        },
                        textMain: {
                            he: "יְהוָה מִמָּרוֹם יִשְׁאָג וּמִמְּעוֹן קָדְשׁוֹ יִתֵּן קוֹלוֹ שָׁאֹג יִשְׁאַג עַל נָוֵהוּ",
                            en: "God shall roar from upon high and cause His voice to sound forth from His holy place, His shout echoes profoundly over His dwelling place.",
                            fr: "L'Eternel rugit du haut du ciel ! Du fond de Sa demeure Sainte Il fait retentir sa voix ! Il pousse de violents rugissements contre le lieu de sa résidence !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'horses',
                    texts: {
                        textSays: {
                            he: "סוּס אוֹמֵר",
                            en: "The Horse says",
                            fr: "Le cheval dit",
                        },
                        textMain: {
                            he: "הִנֵּה כְעֵינֵי עֲבָדִים אֶל יַד אֲדוֹנֵיהֶם כְּעֵינֵי שִׁפְחָה אֶל יַד גְּבִרְתָּהּ כֵּן עֵינֵינוּ אֶל יְהוָה אֱלֹהֵינוּ עַד שֶׁיְּחָנֵּנוּ",
                            en: "Behold, as the eyes of the servants to the hand of their master, as the eyes of the maidservant to the hand of her mistress, so are our eyes to God our Lord until He will favor us.",
                            fr: "Vois ! De même que les yeux des esclaves sont tournés vers la main de leur maître, de même que les yeux de la servante se dirige vers la main de sa maîtresse, ainsi nos yeux sont tournés vers l'Eternel jusqu'à ce qu'Il nous prenne en pitié.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'mule',
                    texts: {
                        textSays: {
                            he: "פֶּרֶד אוֹמֵר",
                            en: "The Mule says",
                            fr: "Le mulet dit",
                        },
                        textMain: {
                            he: "יוֹדוּךָ יְהוָה כָּל מַלְכֵי אָרֶץ כִּי שָׁמְעוּ אִמְרֵי פִיךָ",
                            en: "All the kings of the earth shall acknowledge You, God, for they have heard the sayings of Your mouth.",
                            fr: "Tous les rois de la terre Te rendront hommage après avoir entendu les paroles de Ta bouche.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'donkey',
                    texts: {
                        textSays: {
                            he: "חֲמוֹר אוֹמֵר",
                            en: "The Donkey says",
                            fr: "L'âne dit",
                        },
                        textMain: {
                            he: "לְךָ יְהוָה הַגְּדֻלָּה וְהַגְּבוּרָה וְהַתִּפְאֶרֶת וְהַנֵּצַח וְהַהוֹד כִּי כֹל בַּשָּׁמַיִם וּבָאָרֶץ לְךָ יְהוָה הַמַּמְלָכָה וְהַמִּתְנַשֵּׂא לְכֹל לְרֹאשׁ",
                            en: "Yours, God, is the greatness, and the might, and the splendor, and the victory, and the glory, for everything in the Heavens and earth [is Yours]; Yours, God, is the kingship, and the exaltation over all.",
                            fr: "A toi Seigneur, appartiennent la grandeur et la puissance, la splendeur, la gloire et la magnificence car tout dans le ciel et sur la terre est Ta propriété. A Toi Eternel la Royauté et la domination sur toute chose !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'bull',
                    texts: {
                        textSays: {
                            he: "שׁוֹר אוֹמֵר",
                            en: "The Bull (Ox) says",
                            fr: "Le taureau (bœuf) dit",
                        },
                        textMain: {
                            he: "אָז יָשִׁיר מֹשֶׁה וּבְנֵי יִשְׂרָאֵל אֶת הַשִּׁירָה הַזֹּאת לַיהוָה וַיֹּאמְרוּ לֵאמֹר אָשִׁירָה לַיהוָה כִּי גָאֹה גָּאָה סוּס וְרֹכְבוֹ רָמָה בַיָּם",
                            en: "Then Moshe and the Children of Israel sang this song to God, and they said, I shall sing to God, for He has triumphed; He has thrown the horse and its rider into the sea.",
                            fr: "Alors Moché et les enfants d'Israël chantèrent l'hymne suivant à l'Eternel : Je chanterai pour le Seigneur car Il est souverainement grand, coursier et cavalier, Il les précipités dans la mer.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'girafe',
                    texts: {
                        textSays: {
                            he: "חַיּוֹת הַשָּׂדֶה אוֹמְרִים",
                            en: "The Wild Animals say",
                            fr: "Les animaux des plaines disent",
                        },
                        textMain: {
                            he: "בָּרוּךְ הַטּוֹב וְהַמֵּטִיב",
                            en: "Blessed is the One Who is good and bestows good.",
                            fr: "Béni soit celui qui est bon et bienfaisant !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'deer',
                    texts: {
                        textSays: {
                            he: "צְבִי אוֹמֵר",
                            en: "The Gazelle says",
                            fr: "Le cerf dit",
                        },
                        textMain: {
                            he: "וַאֲנִי אָשִׁיר עֻזֶּךָ וַאֲרַנֵּן לַבֹּקֶר חַסְדֶּךָ כִּי הָיִיתָ מִשְׂגָּב לִי וּמָנוֹס בְּיוֹם צַר לִי",
                            en: "And I shall sing of Your strength, I shall rejoice of Your kindness in the morning, for You were a refuge to me, and a hiding place on the day of my oppression.",
                            fr: "Et moi je chanterai Ta puissance, au matin je célébrerai Ta grâce car Tu es une citadelle pour moi au jour de ma détresse !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'elephant',
                    texts: {
                        textSays: {
                            he: "פִּיל אוֹמֵר",
                            en: "The Elephant says",
                            fr: "L'éléphant dit",
                        },
                        textMain: {
                            he: "מַה גָּדְלוּ מַעֲשֶׂיךָ יְהוָה מְאֹד עָמְקוּ מַחְשְׁבֹתֶיךָ",
                            en: "How great are Your works, God; Your thoughts are tremendously deep.",
                            fr: "Qu'elles sont grandes Tes oeuvres Ô Eternel, infiniment profondes Tes pensées !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'lion',
                    texts: {
                        textSays: {
                            he: "אַרְיֵה אוֹמֵר",
                            en: "The Lion says",
                            fr: "Le lion dit",
                        },
                        textMain: {
                            he: "יְהוָה כַּגִּבּוֹר יֵצֵא כְּאִישׁ מִלְחָמוֹת יָעִיר קִנְאָה יָרִיעַ אַף יַצְרִיחַ עַל אֹיְבָיו יִתְגַּבָּר",
                            en: "God shall go out as a mighty man, He shall arouse zeal He shall say, even roar, He shall prevail over His enemies.",
                            fr: "L'Eternel s'avance comme un héros, comme un guerrier ! Il réveille son ardeur ! Il fait éclater sa voix ! Il pousse le cri de guerre contre ses ennemis !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'bear',
                    texts: {
                        textSays: {
                            he: "דֹּב אוֹמֵר",
                            en: "The Bear says",
                            fr: "L'ours dit",
                        },
                        textMain: {
                            he: "יִשְׂאוּ מִדְבָּר וְעָרָיו חֲצֵרִים תֵּשֵׁב קֵדָר יָרֹנּוּ יֹשְׁבֵי סֶלַע מֵרֹאשׁ הָרִים יִצְוָחוּ יָשִׂימוּ לַיהוָה כָּבוֹד וּתְהִלָּתוֹ בָּאִיִּים יַגִּידוּ",
                            en: "Let the wilderness and its cities lift up their voice, the village that Kedar inhabits; let the inhabitants of the rocks sing, let them shout from the peaks of the mountains. Let them give glory to God, and tell of His praise in the islands.",
                            fr: "Que le désert et les villes élèvent la voix ainsi que les bourgades où demeure Kedar ! Qu'ils chantent les habitants des rochers ! Qu'ils poussent des cris de joie du sommet des montagnes ! Qu'ils rendent hommage à l'Eternel ! Qu'ils proclament Sa gloire dans les îles !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'wolf',
                    texts: {
                        textSays: {
                            he: "זְאֵב אוֹמֵר",
                            en: "The Wolf says",
                            fr: "Le loup dit",
                        },
                        textMain: {
                            he: "עַל כָּל דְּבַר־פֶּשַׁע עַל שׁוֹר עַל חֲמוֹר עַל שֶׂה עַל שַׂלְמָה עַל כָּל אֲבֵדָה אֲשֶׁר יֹאמַר כִּי הוּא זֶה עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם אֲשֶׁר יַרְשִׁיעֻן אֱלֹהִים יְשַׁלֵּם שְׁנַיִם לְרֵעֵהוּ",
                            en: "For every matter of iniquity, for the ox, the donkey, the lamb, the garment, for every lost item about which he says, &lsquo;This is it,&rsquo; the matter of both of them shall come before the judge; he who the judge finds guilty shall pay double to the other.",
                            fr: "Quel que soit l'objet du délit, menue bête, vêtement, toute chose perdue que l'on affirme être sienne, la contestation sera déférée devant le tribunal. Celui que la justice condamnera paiera le double à son prochain.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'fox',
                    texts: {
                        textSays: {
                            he: "שׁוּעָל אוֹמֵר",
                            en: "The Fox says",
                            fr: "Le renard dit",
                        },
                        textMain: {
                            he: "הוֹי בֹּנֶה בֵיתוֹ בְּלֹא צֶדֶק וַעֲלִיּוֹתָיו בְּלֹא מִשְׁפָּט בְּרֵעֵהוּ יַעֲבֹד חִנָּם וּפֹעֲלוֹ לֹא יִתֶּן לוֹ",
                            en: "Woe to him that builds his house without justice, and his chambers without lawfulness; that uses his friend&rsquo;s service without wages, and does not give him for his hire.",
                            fr: "Malheur à celui qui bâtit sa maison à l'aide de l'injustice et surélève ses appartements au prix de l'iniquité, qui fait travailler son prochain sans lui remettre de salaire.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'greyhound',
                    texts: {
                        textSays: {
                            he: "זַרְזִיר אוֹמֵר",
                            en: "The Hound says",
                            fr: "Le lévrier dit",
                        },
                        textMain: {
                            he: "רַנְּנוּ צַדִּיקִים בַּיהוָה לַיְשָׁרִים נָאוָה תְהִלָּה",
                            en: "Let the righteous rejoice in God, praise is befitting to the straight",
                            fr: "Justes ! Entonnez des chants en l'honneur de l'Eternel ! Aux hommes droits il sied de Le louer !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'cat',
                    texts: {
                        textSays: {
                            he: "חָתוּל אוֹמֵר",
                            en: "The Cat says",
                            fr: "Le chat dit",
                        },
                        textMain: {
                            he: "אֶרְדּוֹף אוֹיְבַי וְאַשִּׂיגֵם וְלֹא אָשׁוּב עַד כַּלּוֹתָם",
                            en: "If you rise up like a vulture, and place your nest among the stars, from there I shall bring you down, says God.",
                            fr: "Je poursuivrai mes ennemis et je les atteindrai ! Point de relâche que je ne les ai détruits !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'special chapter chapter6 galaxy',
                    special: {
                        title: {
                            he: "פרק שישי",
                            en: "Chapter 6",
                            fr: "Chapitre 6"
                        }
                    }
                },
                {
                    cssClass: 'crocodile',
                    texts: {
                        textSays: {
                            he: "שְׁרָצִים אוֹמְרִים",
                            en: "The Creeping Creatures say",
                            fr: "Les rampants disent",
                        },
                        textMain: {
                            he: "יִשְׂמַח יִשְׂרָאֵל בְּעֹשָׂיו בְּנֵי צִיּוֹן יָגִילוּ בְמַלְכָּם",
                            en: "Let Israel rejoice in He Who made him; let the children of Zion be joyful in their King.",
                            fr: "Qu'Israël se réjouisse de son créateur, que les enfants de Sion s'enthousiasment pour leur Roi !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'komodo-dragon',
                    texts: {
                        textSays: {
                            he: "אֵלִים שֶׁבַּשְּׁרָצִים אוֹמְרִים",
                            en: "The Prolific Creeping Creatures say",
                            fr: "Les gros reptiles disent",
                        },
                        textMain: {
                            he: "אֶשְׁתְּךָ כְּגֶפֶן פֹּרִיָּה בְּיַרְכְּתֵי בֵיתֶךָ בָּנֶיךָ כִּשְׁתִלֵי זֵיתִים סָבִיב לְשֻׁלְחָנֶךָ",
                            en: "Your wife shall be like a fruittful vine in the recesses of your house; your children like olive shoots around your table.",
                            fr: "Ta femme sera comme une vigne féconde à l'intérieur de ta maison et tes enfants comme des plants d'olivier autour de ta table.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'snake',
                    texts: {
                        textSays: {
                            he: "נָחָשׁ אוֹמֵר",
                            en: "The Snake says",
                            fr: "Le serpent dit",
                        },
                        textMain: {
                            he: "סוֹמֵךְ יְהוָה לְכָל הַנֹּפְלִים וְזוֹקֵף לְכָל הַכְּפוּפִים",
                            en: "God supports all the fallen, and straightens all the bent.",
                            fr: "L'Eternel soutient ceux qui sont tombés et redresse ceux qui sont courbés.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'scorpion',
                    texts: {
                        textSays: {
                            he: "עַקְרַב אוֹמֵר",
                            en: "The Scorpion says",
                            fr: "Le scorpion dit",
                        },
                        textMain: {
                            he: "טוֹב יְהוָה לַכֹּל וְרַחֲמָיו עַל כָּל־מַעֲשָׂיו",
                            en: "God is good to all, and His mercy is upon all of His handiwork.",
                            fr: "L'Eternel est bon pour tous et Sa clémence s'étend à toutes Ses créatures.",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'snail',
                    texts: {
                        textSays: {
                            he: "שַׁבְּלוּל אוֹמֵר",
                            en: "The Snail says",
                            fr: "L'escargot dit",
                        },
                        textMain: {
                            he: "כְּמוֹ שַׁבְּלוּל תֶּמֶס יַהֲלֹךְ נֵפֶל אֵשֶׁת בַּל חָזוּ שָׁמֶשׁ",
                            en: "Like the snail that melts away, the stillborn of a mole that does not see the sun.",
                            fr: "Que les pervers soient comme un limaçon qui se dissout en rampant, comme l'avortant d'une femme qui n'a jamais vu le soleil !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'ants',
                    texts: {
                        textSays: {
                            he: "נְמָלָה אוֹמֶרֶת",
                            en: "The Ant says",
                            fr: "La fourmi dit",
                        },
                        textMain: {
                            he: "לֵךְ אֶל נְמָלָה עָצֵל רְאֵה דְרָכֶיהָ וַחֲכָם",
                            en: "Go to the ant, you sluggard; consider her ways, and be wise.",
                            fr: "Va trouver la fourmi paresseux ! Observe sa façon d'agir et deviens sage !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'mouse',
                    texts: {
                        textSays: {
                            he: "עַכְבַּר אוֹמֵר",
                            en: "The Mouse says",
                            fr: "La souris dit",
                        },
                        textMain: {
                            he: "וְאַתָּה צַדִּיק עַל כָּל הַבָּא עָליּ כִּי אֱמֶת עָשִׂיתָ וַאניּ הִרְשָׁעתיּ",
                            en: "And You are just for all that comes upon me, for You have acted in truth and I have been wicked.",
                            fr: "Tu es équitable en tout ce qui m'arrive car tu as loyalement agi alors que j'étais coupable",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'rat',
                    texts: {
                        textSays: {
                            he: "חֻלְדָּה אוֹמֶרֶת",
                            en: "The Rat says",
                            fr: "Le rat dit",
                        },
                        textMain: {
                            he: "כֹּל הַנְּשָׁמָה תְּהַלֵּל יָהּ הַלְלוּיָהּ",
                            en: "Let every soul praise God, Halleluyah!",
                            fr: "Que chaque souffle loue l'Eternel Béni Soit Il !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'dogs',
                    texts: {
                        textSays: {
                            he: "כְּלָבִים אוֹמְרִים",
                            en: "The Dogs say",
                            fr: "Les chiens disent",
                        },
                        textMain: {
                            he: "בֹּאוּ נִשְׁתַּחֲוֶה וְנִכְרָעָה נִבְרְכָה לִפְנֵי יְהוָה עֹשֵׂנוּ",
                            en: "Come, let us worship and bow down; let us kneel before God our Maker.",
                            fr: "Venez ! Prosternons nous devant l'Eternel notre créateur !",
                        },
                        textSource: {
                            he: "",
                            en: "",
                            fr: "",
                        },
                    }
                },
                {
                    cssClass: 'special end-prayer end-prayer-1 galaxy',
                    special: {
                        title: {
                            he: "תפילה אחרי הפרק שירה - א",
                            en: "Prayer after the Perek Shira I",
                            fr: "Prière après le Perek Chira I"
                        },
                        desc: {
                            he: `(ילקוט שמעוני פרשת בא רמז קפז) רַבִּי יְשַׁעְיָה תַּלְמִידוֹ שֶׁל רַבִּי חֲנִינָא בֶּן דּוֹסָא הִתְעַנָּה חָמֵשׁ וּשְׁמוֹנִים תַּעֲנִיּוֹת. אָמַר כְּלָבִים שֶׁכָּתוּב בָּהֶם (ישעיה נו:יא) וְהַכְּלָבִים עַזֵּי נֶפֶשׁ לֹא יָדְעוּ שָׂבְעָה, יִזְכּוּ לוֹמַר שִׁירָה. עָנָה לוֹ מַלְאָךְ מִן הַשָּׁמַיִם וְאָמַר לוֹ יְשַעְיָה עַד מָתַי אַתָּה מִתְעַנֶּה עַל זֶה הַדָּבָר שְׁבוּעָה הִיא מִלִּפְנֵי הַמָּקוֹם בָּרוּךְ הוּא מִיּוֹם שֶׁגִּילָּה סוֹדוֹ לַחֲבַקּוּק הַנָּבִיא לֹא גִלָּה דָבָר זֶה לְשׁוּם בְּרִיאָה בָּעוֹלָם. אֶלָּא בִּשְׁבִיל שֶׁתַּלְמִידוֹ שֶׁל אָדָם גָּדוֹל אַתָּה שְׁלָחוּנִי מִן הַשָּׁמַיִם לִזְדַקֵּק אֵלֶיךָ לְהַגִיד לְךָ בַּמֶה זָכוּ הַכְּלָבִים לוֹמַר שִׁירָה. לְפִי שֶׁכָּתוּב בָּהֶם (שמות יא:ז) וּלְכֹל בְּנִי יִשְׂרָאֵל לֹא יֶחֱרַץ כֶּלֶב לְשׁוֹנוֹ. וְלֹא עוֹד אֶלָּא שֶׁזָכוּ לְעַבֵּד עוֹרוֹת מִצּוֹאָתָם שֶׁכּוֹתְבִים בָּהֶם תְּפִילִּין וּמְזוּזוֹת וְסִפְרֵי תּוֹרָה. עַל כֵּן זָכוּ לוֹמַר שׁירָה. וּלְעִנְיַן הַשְׁאֵלָה שֶּׁשָּׁאַלתָּ חֲזוֹר לַאֲחֹרֶיךָ וְאַל תּוֹסִיף בַּדָּבָר הַזֶּה עוֹד, כְּמוֹ שֶׁכָּתוּב (משלי כא:כג) שׁוֹמֵר פִּיו וּלְשׁוֹנוֹ שׁוֹמֵר מִצָּרוֹת נַפְשׁוֹ.
                            <p>בָּרוּךְ יהוה לְעוֹלָם אָמֵן וְאָמֵן׃ בָּרוּךְ יהוה מְצִיוֹן שׁוֹכֵן יְרוּשָלָיִם הַלְלוּיָהּ׃ בָּרוּךְ יהוה אֱלֹהִים אֱלֹהֵי יִשְׂרָאֵל עֹשֵׂה נִפְלָאוֹת לְבַדּוֹ׃ וּבָרוּךְ שֵׁם כְּבוֹדוֹ לְעוֹלָם וְיִמָּלֵא כְבוֹדוֹ אֶת כָּל הָאָרֶץ אָמֵן וְאָמֵן׃</p>`,
                            en: `[Yalḳut Shimoni, Bo 187:] Rabbi Yeshayah, student of Rabbi Ḥanina ben Dosa, fasted eighty-five fasts. He said, “Dogs, about which it is written, ‘the dogs are brazen of spirit; they do not know satisfaction' — shall they merit saying a song?” An angel answered him from Heaven and said to him, “Yeshayah, until when will you fast over this? It is an oath from the blessed Holy One; from the day that he revealed his secret to Ḥavaquq the prophet, he has not revealed this matter to anyone in the world. But because you are the student of a great man, I have been sent from Heaven to assist you. They said that dogs have written about them, ‘No dog sharpened its tongue against any of the children of Yisrael'. Furthermore, they merited that hides are tanned with their excrement, on which Tefillin, Mezuzot, and Torah scrolls are written. For this reason they merited saying a song. And regarding what you asked, take back your word and do not continue in this way, as it is written, ‘He that guards his mouth and tongue, guards from afflictions of his soul.’”
                            <p>Blessed is God forever, Amen and Amen. Blessed is God from Tsiyon, Dweller in Jerusalem, praise Yah! Blessed is God Elohim, elohah of Yisrael, worker of wonders alone. And blessed is the Name of his kavod, and his kavod should fill the entire land, Amen and Amen.</p>`,
                            fr: `<b>[FRANCAIS]</b> [Yalqout Chimoni, Bo 187:] Rabbi Yechayah, élève de Rabbi 'Hanina ben Dosa, a jeûné quatre-vingt jours. Il disait : "Les chiens, a propos desquels il est écrit 'Les chiens sont He said, “Dogs, about which it is written, 'les chiens sont effrontés d'esprit; ils ne connaissent pas la satisfaction' - mériteront-ils de dire un chant ? Un ange lui répondit du ciel et lui dit : "Yechayah, jusqu'à quand jeûneras-tu pour cela ? C'est un serment du Saint Béni Soit-Il; depuis le jour où il a révélé son secret à 'Habakouk le prophète, il n'a révélé cette affaire à personne dans le monde. Mais parce que tu es l'élève d'un grand homme, j'ai été envoyé du Ciel pour t'aider. Ils ont dit que les chiens ont écrit à leur sujet : "Aucun chien n'a aiguisé sa langue contre aucun des enfants d'Israël". De plus, ils méritaient que les peaux soient tannées avec leurs excréments, sur lesquels sont écrits les Téfilines, les Mezouzot et les rouleaux de la Torah. Pour cette raison, ils méritaient de dire un chant. Et concernant ce que tu as demandé, reprends ta parole et ne continue pas ainsi, comme il est écrit : ‘Celui qui garde sa bouche et sa langue, préserve des afflictions de son âme.’ »
                            <p>Béni soit Dieu pour toujours, Amen et Amen. Béni soit Dieu de Tsiyon, qui réside Jérusalem, loue Yah ! Béni soit Dieu Elohim, Dieu d'Israël, seul artisan de prodiges. Et béni est le nom de son kavod, et son kavod remplira toute la terre, Amen et Amen.</p>`
                        }
                    }
                },
                {
                    cssClass: 'special end-prayer end-prayer-2 galaxy',
                    special: {
                        title: {
                            he: "תפילה אחרי הפרק שירה - ב",
                            en: "Prayer after the Perek Shira II",
                            fr: "Prière après le Perek Chira II"
                        },
                        desc: {
                            he: `<p>רִבּוֹן כָּל הָעוֹלָמִים, יְהִי רָצוֹן מִלְּפָנֶיךָ יי אֱלֹהַי וֶאֱלֹהֵי אֲבוֹתַי, שֶׁבִּזְכוּת פֶּרֶק שִׁירָה שֶׁקָּרָאתִי, שֶׁהוּא שִׁירַת הַדּוֹמֵם הַצּוֹמֵחַ וְהַחַי, וְהַמַּלְאָכִים הַמְּמֻנִּים עֲלֵיהֶם מֵאֵת הַשֵׁם יִתְבָּרֵךְ, שֶׁתְּהֵא אֲמִירָתוֹ כְּהַקְרָבַת קָרְבָּן עַל גַּבֵּי הַמִּזְבֵּחַ. שֶׁתְּהֵא שָׁעָה זוּ שְׁעַת רַחֲמִים, שְׁעַת הַקְשָׁבָה, שְׁעַת הַאֲזָנָה, וְנִקְרָאֲךָ וּתְעַנִּינוּ, נַעְתִּיר לְךָ וְהֵעָתֵר לָנוּ. שֶׁתִּהְיֶה עוֹלָה לְפָנֶיךָ אֲמִירַת פֶּרֶק שִׁירָה כְּאִלּוּ הִשַּׂגְנוּ כֹּל הַסּוֹדוֹת הַנִּפְלָאוֹת וְהַנּוֹרָאוֹת אֲשֶׁר הֵם חֲתוּמִים בּוֹ בְּכֹל תְּנָאָיו. הַחְזִירֵנוּ בִּתְשׁוּבָה שְׁלֵמָה לְפָנֶיךָ, וְנִזְכֶּה לְמָקוֹם שֶׁהַנְּפָשׁוֹת הָרוּחוֹת וְהַנְשָׁמוֹת נֶחְצָבוֹת מִשַּׁם, וּכְאִלּוּ עָשִׂינוּ כֹּל אַשֵּׁר מוּטָל עָלֵינוּ לְהַשִּׂיג, בֵּין בְּגִלְגּוּל זֶה בֵּין בְּגִלְגּוּלִים אֲחֵרִים, וּמַלֵּא כֹּל מִשְׁאֲלוֹת לִבֵּנוּ לְטוֹבָה (כָּאן יוֹסִיף בִּפְרָטִיּוּת מַה שֶׁנִּצְרַךְ) וְתִשְׁלַח בְּרָכָה הַצְלָחָה וְהַרְוָחָה בְּכֹל מֵעֲשֵׂה יָדֵינוּ , וְנִזְכֶּה לְשׁוֹרֵר לַעֲתִיד לָבוֹא, וְתַשִּׁיב שְׁכִינָתְךָ לְעִיר קָדְשְׁךָ בִּמְהֵרָה בְּיָמֵינוּ אָמֵן.</p>`,
                            en: `<p>Master of all the Worlds, may it be Your will, O HaShem, my G-d and the G-d of my forefathers, that in the merit of Perek Shirah that I have recited and in which I involved myself, which is the song of mineral, vegetable, and animal, and the holy angels that are appointed over them by HaShem, Blessed is He, and [which is the song] of the connection of the Divine Presence with all the worlds, and the connection of the lower worlds with the higher worlds, and the recitation of which is like an offering upon the Altar - that this time should be a time of mercy, a time of attentiveness, a time of giving ear, when we call upon You and You answer us, [a time] when we beseech You and You respond to us. May our recitation and involvement in Perek Shira rise up before You as if we have comprehended all the mysteries, wonders, and awesomeness that are sealed within it, in its every manifestation. Bring us back in complete repentance before You, and may we merit [to reach] the place from which the life-forces, spirits, and souls are hewn, as if we had performed everything that we are called upon to comprehend, whether in this transmigration [of the soul] or in other transmigrations. And may we be among those who ascend to and merit the World to Come, among the other righteous and devout people. And may You fulfill all the requests of our heart for good (**at this point one may express one's personal requests**) and may You be with our heart and the utterances of our mouth at the times of our thoughts, and with our hands at the times when we act. And may You send blessing and success and relief in all our handiwork. May You let us stand up from amid our suffering and may You raise us up from the trash heaps of poverty. Through the strength of this song may all the powerful [judgments] be sweetened and may blessing be spread out in all the worlds. May we merit to sing in the Time to Come and may You return the Divine Presence to Your Holy City speedily, in our days, Amen.</p>`,
                            fr: "<b>[FRANCAIS]</b> Maître du monde, que par ta volonté, mon Dieu et Dieu de mes pères, que par le mérite du Perek Chira que j'ai lu et étudié, qui est le chant des éléments inertes, du règne végétal et animal, représentés par un ange saint nommé par l'Eternel béni soit Il. Par l'attachement de la présence divine avec les mondes supérieurs. Que cette étude soit comme si j'avais apporté un sacrifice au temple. Que cette heure soit une heure de miséricorde, une heure d'attention, une heure d'écoute. Nous t'implorons et tu nous réponds. Nous t'invoquons et tu nous exauces. Que notre lecture et notre étude du Perek Chira monte vers toi comme si nous en avions compris toutes les allusions et les merveilleux secrets. Fais nous revenir vers toi, que nous puissions mériter de trouver place dans la source de vie des esprits et des âmes, comme si nous avions accompli tout ce que nous devions réaliser depuis nos réincarnations passées et futures. Que nous fassions partie des Justes et des pieux qui méritent le monde futur. Exauce toutes nos demandes pour le bien. (Adresser ici sa supplique). Que tu sois avec notre coeur et avec nos paroles durant notre réflexion, avec nos mains durant nos activités. Envoie nous bénédictions, succès et abondance dans nos actions, relève nous de la poussière de notre misère et de la boue de notre pauvreté. Grâce au Perek Chira que les verdicts annoncés soient cléments, que se répande la bénédictions sur tous les mondes, que nous puissions chanter le Perek Chira dans un proche avenir, que tu ramènes ta présence divine dans la ville de ta sainteté rapidement et de nos jours. Amen."
                        }
                    }
                },
                {
                    cssClass: 'special end galaxy no-lang-desc',
                    special: {
                        title: {
                            he: "סוף פרק שירה",
                            en: "End of Perek Shira",
                            fr: "Fin du Perek Chira"
                        },
                        desc: {
                            he: "החלק כדי להמשיך",
                            en: "Swipe to continue",
                            fr: "Faire glisser pour continuer"
                        }
                    }
                },
            ]
        }
    },
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
            console.log('handleReInit', event, slick);
        },
        handleSetPosition(event, slick) {
            console.log('handleSetPosition', event, slick);
        },
        handleSwipe(event, slick, direction) {
            console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            console.log('handleLazeLoadError', event, slick, image, imageSource);
        }
    }
}
