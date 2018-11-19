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
                speed: 500,
                fade: true,
                cssEase: 'linear'
            },
            slides: [
                {
                    cssClass: 'special intro sky',
                    special: {
                        title: {
                            he: 'ברוכים הבאים ל <i>My Perek Shira</i>',
                            en: 'Welcome to <i>My Perek Shira</i>',
                            fr: 'Bienvenue sur <i>My Perek Shira</i>'
                        },
                        desc: {
                            he: 'לסחוב כדי להתחיל',
                            en: 'Swipe to begin',
                            fr: 'Faire glisser pour commencer'
                        }
                    }
                },
                {
                    cssClass: 'special chapter chapter1 sky',
                    special: {
                        title: {
                            he: 'פרק ראשון',
                            en: 'Chapter 1',
                            fr: 'Chapitre 1'
                        }
                    }
                },
                {
                    cssClass: 'sky',
                    texts: {
                        textSays: {
                            he: 'שָׁמַיִם אוֹמְרִים',
                            en: 'The Heavens say',
                            fr: 'Les Cieux disent',
                        },
                        textMain: {
                            he: ' הַשָּׁמַ֗יִם מְֽסַפְּרִ֥ים כְּבֽוֹד־אֵ֑ל וּֽמַעֲשֵׂ֥ה יָ֝דָ֗יו מַגִּ֥יד הָרָקִֽיעַ׃ ',
                            en: 'The heavens speak of God&rsquo;s glory, and the skies tell of His handiwork.',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים יט, ב',
                            en: 'Psalms 19:2',
                            fr: 'Psaumes 19:2',
                        },
                    }
                },
                {
                    cssClass: 'earth',
                    texts: {
                        textSays: {
                            he: 'אֶרֶץ אוֹמֶרֶת',
                            en: 'The Earth says',
                            fr: '',
                        },
                        textMain: {
                            he: 'לְדָוִ֗ד מִ֫זְמ֥וֹר לַֽ֭יהוָה הָאָ֣רֶץ וּמְלוֹאָ֑הּ תֵּ֝בֵ֗ל וְיֹ֣שְׁבֵי בָֽהּ׃ <span class="text-source">תהילים פרק כד א</span><br>ואומר. מִכְּנַ֨ף הָאָ֜רֶץ זְמִרֹ֤ת שָׁמַ֙עְנוּ֙ צְבִ֣י לַצַּדִּ֔יק׃',
                            en: 'The earth and every thing in it are God&rsquo;s; the inhabited area and all that dwell within it.&rdquo;<br>And it says: &ldquo;From the wings of the land we have heard song, glory to the righteous.',
                            fr: '',
                        },
                        textSource: {
                            he: 'ישעיהו כד טז',
                            en: 'Isaiah 24:16',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'eden',
                    texts: {
                        textSays: {
                            he: 'גַּן עֵדֶן אוֹמֵר',
                            en: 'The Garden of Eden says',
                            fr: '',
                        },
                        textMain: {
                            he: 'ע֤וּרִי צָפוֹן֙ וּב֣וֹאִי תֵימָ֔ן הָפִ֥יחִי גַנִּ֖י יִזְּל֣וּ בְשָׂמָ֑יו יָבֹ֤א דוֹדִי֙ לְגַנּ֔וֹ וְיֹאכַ֖ל פְּרִ֥י מְגָדָֽיו׃',
                            en: 'Arouse yourself, O north [wind], and come, O south! Blow upon my garden, let its spices flow out; let my Beloved come to His garden and eat of its precious fruit.',
                            fr: '',
                        },
                        textSource: {
                            he: 'שיר השירים ד טז',
                            en: 'Song of Songs 4:16',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'guehinom',
                    texts: {
                        textSays: {
                            he: 'גֵּיהִנֹּם אוֹמֵר',
                            en: 'Gehinnom says',
                            fr: '',
                        },
                        textMain: {
                            he: 'כִּי־הִ֭שְׂבִּיעַ נֶ֣פֶשׁ שֹׁקֵקָ֑ה וְנֶ֥פֶשׁ רְ֝עֵבָה מִלֵּא־טֽוֹב׃',
                            en: 'For He has satisfied the longing soul, and has filled the hungry soul with good.',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים קז ט',
                            en: 'Psalms 107:9',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'desert',
                    texts: {
                        textSays: {
                            he: 'מִדְבַּר אוֹמֵר',
                            en: 'The Desert says',
                            fr: '',
                        },
                        textMain: {
                            he: 'יְשֻׂשׂ֥וּם מִדְבָּ֖ר וְצִיָּ֑ה וְתָגֵ֧ל עֲרָבָ֛ה וְתִפְרַ֖ח כַּחֲבַצָּֽלֶת׃',
                            en: 'The desert and the wasteland shall rejoice, and the arid region shall exult, and blossom like the rose.',
                            fr: '',
                        },
                        textSource: {
                            he: 'ישעיהו לה א',
                            en: 'Isaiah 35:1',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'fields',
                    texts: {
                        textSays: {
                            he: 'שָׂדוֹת אוֹמְרִים',
                            en: 'The Fields say',
                            fr: '',
                        },
                        textMain: {
                            he: 'יְֽהוָ֗ה בְּחָכְמָ֥ה יָֽסַד־אָ֑רֶץ כּוֹנֵ֥ן שָׁ֝מַ֗יִם בִּתְבוּנָֽה׃',
                            en: 'God founded the land with wisdom; He established the heavens with understanding.',
                            fr: '',
                        },
                        textSource: {
                            he: 'משלי ג יט',
                            en: 'Proverbs 3:19',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'water',
                    texts: {
                        textSays: {
                            he: 'מַיִם אוֹמְרִים',
                            en: 'The Waters say',
                            fr: '',
                        },
                        textMain: {
                            he: 'לְק֨וֹל תִּתּ֜וֹ הֲמ֥וֹן מַ֙יִם֙ בַּשָּׁמַ֔יִם וַיַּ֥עַל נְשִׂאִ֖ים מִקְצֵה־אָ֑רֶץ בְּרָקִ֤ים לַמָּטָר֙ עָשָׂ֔ה וַיֹּ֥צֵא ר֖וּחַ מֵאֹצְרֹתָֽיו׃',
                            en: 'When His voice resounds with a great mass of water in the heavens, and He raises vapors from the ends of the Earth; when He makes lightning amongst the rain, and He brings out the wind from its storehouses.',
                            fr: '',
                        },
                        textSource: {
                            he: 'ירמיה נא טז',
                            en: 'Jeremiah 51:16',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'seas',
                    texts: {
                        textSays: {
                            he: 'יָמִים אוֹמְרִים',
                            en: 'The Seas say',
                            fr: '',
                        },
                        textMain: {
                            he: 'מִקֹּל֨וֹת ׀ מַ֤יִם רַבִּ֗ים אַדִּירִ֣ים מִשְׁבְּרֵי־יָ֑ם אַדִּ֖יר בַּמָּר֣וֹם יְהוָֽה',
                            en: 'More than the voices of many waters, than the mighty waves of the sea, God on high is mighty.',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים צג ד',
                            en: 'Psalms 93:4',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'river',
                    texts: {
                        textSays: {
                            he: 'נַהֲרוֹת אוֹמְרִים',
                            en: 'The Rivers say',
                            fr: '',
                        },
                        textMain: {
                            he: 'נְהָר֥וֹת יִמְחֲאוּ־כָ֑ף יַ֝֗חַד הָרִ֥ים יְרַנֵּֽנוּ',
                            en: 'Let the rivers clap their hands, let the mountains sing for joy together!',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים צח ח',
                            en: 'Psalms 98:8',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'spring-water',
                    texts: {
                        textSays: {
                            he: 'מַעְיָנוֹת אוֹמְרִים',
                            en: 'The Wellsprings say',
                            fr: '',
                        },
                        textMain: {
                            he: 'וְשָׁרִ֥ים כְּחֹלְלִ֑ים כָּֽל־מַעְיָנַ֥י בָּֽךְ',
                            en: 'And as singers who are like dancers are all those who study You.',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים פז ז',
                            en: 'Psalms 87:7',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'special chapter chapter2 sky',
                    special: {
                        title: {
                            he: 'פרק שני',
                            en: 'Chapter 2',
                            fr: 'Chapitre 2'
                        }
                    }
                },
                {
                    cssClass: 'day',
                    texts: {
                        textSays: {
                            he: 'יוֹם אוֹמֵר',
                            en: 'The Day says',
                            fr: '',
                        },
                        textMain: {
                            he: 'יוֹם לְיוֹם יַבִּיעַ אֹמֶר וְלַיְלָה לְּלַיְלָה יְחַוֶּה דָּעַת',
                            en: 'Day to day utters speech, and night to night relates knowledge.',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים יט ג',
                            en: 'Psalms 19:3',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'night',
                    texts: {
                        textSays: {
                            he: 'לַיְלָה אוֹמֵר',
                            en: 'The Night says',
                            fr: '',
                        },
                        textMain: {
                            he: 'לְהַגִּיד בַּבֹּקֶר חַסְדֶּךָ וֶאֱמוּנָתְךָ בַּלֵילוֹת',
                            en: 'To speak of His kindness in the morning, and of His faithfulness by nights.',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים תב ג',
                            en: 'Psalms 92:3',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'sun',
                    texts: {
                        textSays: {
                            he: 'שֶׁמֶשׁ אוֹמֵר',
                            en: 'The Sun says',
                            fr: '',
                        },
                        textMain: {
                            he: 'שֶׁמֶשׁ יָרֵחַ עָמַד זְבֻלָה לְאוֹר חִצֶּיךָ יְהַלֵּכוּ לְנֹגַהּ בְּרַק חֲנִיתֶּךָ',
                            en: 'The sun, [when covered by] the moon, stood in its abode; they speed at the light of Your arrows, and at the shining of Your glittering spear.',
                            fr: '',
                        },
                        textSource: {
                            he: 'חבקוק ג יא',
                            en: 'Habakuk 3:11',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'moon',
                    texts: {
                        textSays: {
                            he: 'יָרֵחַ אוֹמֶרֶת',
                            en: 'The Moon says',
                            fr: '',
                        },
                        textMain: {
                            he: 'עָשָׂה יָרֵחַ לְמוֹעֲדִים שֶׁמֶשׁ יָדַע מְבוֹאוֹ',
                            en: 'He made the moon for the festivals; the sun knows the time of its coming.',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים קד יט',
                            en: 'Psalms 104:19',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'stars',
                    texts: {
                        textSays: {
                            he: 'כּוֹכָבִים אוֹמְרִים',
                            en: 'The Stars say',
                            fr: '',
                        },
                        textMain: {
                            he: 'אַתָּה הוּא יי לְבַדֶּךָ אַתָּה עָשִׂיתָ אֶת הַשָּׁמַיִם שְׁמֵי הַשָּׁמַיִם וְכָל צְבָאָם הָאָרֶץ וְכָל אֲשֶׁר עָלֶיהָ הַיַּמִּים וְכָל אֲשֶׁר בָּהֶם וְאַתָּה מְחַיֶּה אֶת כֻּלָּם וּצְבָא הַשָּׁמַיִם לְךָ מִשְׁתַּחֲוִים',
                            en: 'You, only You, are God; You made heaven, the heaven of heavens, with all their host; the earth, and everything that is in it; the seas, and everything that is in them; and You preserve them all; and the host of heaven prostrate themselves to You.',
                            fr: '',
                        },
                        textSource: {
                            he: 'נחמיה ט ו',
                            en: 'Nehemiah 9:6',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'clouds',
                    texts: {
                        textSays: {
                            he: 'עָבִים אוֹמְרִים',
                            en: 'The Clouds say',
                            fr: '',
                        },
                        textMain: {
                            he: 'יָשֶׁת חֹשֶׁךְ סִתְרוֹ סְבִיבוֹתָיו סֻכָּתוֹ חֶשְׁכַת מַיִם עָבֵי שְׁחָקִים',
                            en: 'He made darkness His secret place; His pavilion around Him was dark with waters and thick clouds of the skies.',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים יח ב',
                            en: 'Psalms 18:12',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'glory-clouds',
                    texts: {
                        textSays: {
                            he: 'עַנְנֵי כָּבוֹד אוֹמְרִים',
                            en: 'The Clouds of Glory say',
                            fr: '',
                        },
                        textMain: {
                            he: 'אַף בְּרִי יַטְרִיחַ עָב יָפִיץ עֲנַן אוֹרוֹ',
                            en: 'Also He burdens the thick cloud with an overflow; the cloud scatters its light.',
                            fr: '',
                        },
                        textSource: {
                            he: 'איוב לז יא',
                            en: 'Job 37:11',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'wind',
                    texts: {
                        textSays: {
                            he: 'רוּחַ אוֹמֵר',
                            en: 'The Wind says',
                            fr: '',
                        },
                        textMain: {
                            he: 'לַצָּפוֹן תֵּנִי וּלְתֵימָן אַל תִּכְלָאִי הָבִיאִי בָנַי מֵרָחוֹק וּבְנוֹתַי מִקְצֵה הָאָרֶץ',
                            en: 'I will say to the north, Give up; and to the south, Do not withhold; bring My sons from far, and My daughters from the ends of the earth.',
                            fr: '',
                        },
                        textSource: {
                            he: 'ישעיה מג ו',
                            en: 'Isaiah 43:6',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'lightnings',
                    texts: {
                        textSays: {
                            he: 'בְּרָקִים אוֹמְרִים',
                            en: 'The Lightning Bolts say',
                            fr: '',
                        },
                        textMain: {
                            he: 'בְּרָקִים לַמָּטָר עָשָׂה מוֹצֵא רוּחַ מֵאוֹצְרוֹ',
                            en: 'He causes the vapors to ascend from the ends of the earth; He makes lightning for the rain; He brings forth the wind from His storehouses.',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים קלה ז',
                            en: 'Psalms 135:7',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'dew',
                    texts: {
                        textSays: {
                            he: 'טַל אוֹמֵר',
                            en: 'The Dew says',
                            fr: '',
                        },
                        textMain: {
                            he: 'אֶהְיֶה כַטַּל לְיִשְׂרָאֵל יִפְרַח כַּשּׁוֹשַׁנָּה וְיַךְ שָׁרָשָׁיו כַּלְּבָנוֹן',
                            en: 'I shall be as the dew to Israel, he shall blossom as a rose, he shall spread forth his roots as the Lebanon.',
                            fr: '',
                        },
                        textSource: {
                            he: 'הושע יד ו',
                            en: 'Hoshea 14:6',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'rain',
                    texts: {
                        textSays: {
                            he: 'גְּשָׁמִים אוֹמְרִים',
                            en: 'The Rains say',
                            fr: '',
                        },
                        textMain: {
                            he: 'גֶּשֶׁם נְדָבוֹת תָּנִיף אֱלֹהִים נַחֲלָתְךָ וְנִלְאָה אַתָּה כוֹנַנְתָּ',
                            en: 'You, O Lord, poured a generous rain, to strengthen Your heritage when it languished.',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים סח י',
                            en: 'Psalms 68:10',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'special chapter chapter3 sky',
                    special: {
                        title: {
                            he: 'פרק שלישי',
                            en: 'Chapter 3',
                            fr: 'Chapitre 3'
                        }
                    }
                },
                {
                    cssClass: 'trees-fields',
                    texts: {
                        textSays: {
                            he: 'אִילָנוֹת שֶׁבְּשָׂדֶה אוֹמְרִים',
                            en: 'The Wild Trees say',
                            fr: '',
                        },
                        textMain: {
                            he: 'אָז יְרַנְּנוּ עֲצֵי הַיָּעַר מִלִּפְנֵי יי כִּי בָא לִשְׁפּוֹט אֶת הָאָרֶץ',
                            en: 'Then shall the trees of the forest sing out at the presence of God, because He comes to judge the earth.',
                            fr: '',
                        },
                        textSource: {
                            he: 'דברי הימים א טז לח',
                            en: 'Chronicles I, 16:33',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'vine',
                    texts: {
                        textSays: {
                            he: 'גֶּפֶן אוֹמֶרֶת',
                            en: 'The Vine says',
                            fr: '',
                        },
                        textMain: {
                            he: 'כֹּה אָמַר יי כַּאֲשֶׁר יִמָּצֵא הַתִּירוֹשׁ בָּאֶשְׁכּוֹל וְאָמַר אַל תַּשְׁחִיתֵהוּ כִּי בְרָכָה בּוֹ כֵּן אֶעֱשֶׂה לְמַעַן עֲבָדַי לְבִלְתִּי הַשְׁחִית הַכֹּל',
                            en: 'So says God: As the wine is found in the cluster, and one says: Do not destroy it, for a blessing is in it &mdash; so shall I do for the sake of my servants, so as not to destroy eveiything.',
                            fr: '',
                        },
                        textSource: {
                            he: 'ישעיה סח ח',
                            en: 'Isaiah 65:8',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'fig-tree',
                    texts: {
                        textSays: {
                            he: 'תְּאֵנָה אוֹמֶרֶת',
                            en: 'The Fig says',
                            fr: '',
                        },
                        textMain: {
                            he: 'נֹצֵר תְּאֵנָה יֹאכַל פִּרְיָהּ',
                            en: 'The one who guards the fig shall eat of her fruits.',
                            fr: '',
                        },
                        textSource: {
                            he: 'משלי כז יח',
                            en: 'Proverbs 27:18',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'pomegranate-tree',
                    texts: {
                        textSays: {
                            he: 'רִמּוֹן אוֹמֵר',
                            en: 'The Pomegranate says',
                            fr: '',
                        },
                        textMain: {
                            he: 'כְּפֶלַח הָרִמּוֹן רַקָּתֵךְ מִבַּעַד לְצַמָּתֵךְ',
                            en: 'Your cheeks are like a piece of a pomegranate behind your veil.',
                            fr: '',
                        },
                        textSource: {
                            he: 'שיר השירים ד ג',
                            en: 'Song of Songs 4:3',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'date-tree',
                    texts: {
                        textSays: {
                            he: 'תָּמָר אוֹמֵר',
                            en: 'The Date says',
                            fr: '',
                        },
                        textMain: {
                            he: 'צַדִּיק כַּתָּמָר יִפְרָח כְּאֶרֶז בַּלְּבָנוֹן יִשְׂגֶּה',
                            en: 'The righteous flourish like the palm tree; they grow like a cedar in Lebanon.',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים צב יג',
                            en: 'Psalms 92:13',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'apple-tree',
                    texts: {
                        textSays: {
                            he: 'תַּפּוּחַ אוֹמֵר',
                            en: 'The Apple says',
                            fr: '',
                        },
                        textMain: {
                            he: 'כְּתַפּוּחַ בַּעֲצֵי הַיַּעַר כֵּן דּוֹדִי בֵּין הַבָּנִים בְּצִלּוֹ חִמַּדְתִּי וְיָשַׁבְתִּי וּפִרְיוֹ מָתוֹק לְחִכִּי',
                            en: 'Like the apple among the trees of the forest, so is my beloved among the young men. I yearned for and sat in his proximity, and his fruit is sweet to my palate.',
                            fr: '',
                        },
                        textSource: {
                            he: 'שיר השירים ב ג',
                            en: 'Song of Songs 2:3',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'wheat',
                    texts: {
                        textSays: {
                            he: 'שִׁבֹּלֶת חִטִּים אוֹמֶרֶת',
                            en: 'The Sheaves of Wheat say',
                            fr: '',
                        },
                        textMain: {
                            he: 'שִׁיר הַמַּעֲלוֹת מִמַּעֲמַקִּים קְרָאתִיךָ יְהוָה',
                            en: 'A song of ascents: Out of the depths have I cried to You, O God.',
                            fr: '',
                        },
                        textSource: {
                            he: 'תהילים קד א',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'barley',
                    texts: {
                        textSays: {
                            he: 'שִׁבֹּלֶת שְׂעוֹרִים אוֹמֶרֶת',
                            en: 'The Sheaves of Barley say',
                            fr: '',
                        },
                        textMain: {
                            he: 'תְּפִלָּה לְעָנִי כִי יַעֲטֹף וְלִפְנֵי יְהוָה יִשְׁפֹּךְ שִׂיחוֹ',
                            en: 'A prayer of the pauper, when he swoons, and pours out his speech before God.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'cereals',
                    texts: {
                        textSays: {
                            he: 'שְׁאַר השִׁבּוֹלִים אוֹמְרִים',
                            en: 'The Other Sheaves say',
                            fr: '',
                        },
                        textMain: {
                            he: 'לָבְשׁוּ כָרִים הַצֹּאן וַעֲמָקִים יַעַטְפוּ בָר יִתְרוֹעֲעוּ אַף יָשִׁירוּ',
                            en: 'The meadows are clothed with flocks; the valleys also are covered over with grain; they shout for joy, they also sing.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'vegetables',
                    texts: {
                        textSays: {
                            he: 'יְרָקוֹת שֶׁבַּשָּׂדֶה אוֹמְרִים',
                            en: 'The Vegetables of the Field say',
                            fr: '',
                        },
                        textMain: {
                            he: 'תְּלָמֶיהָ רַוֵּה נַחֵת גְּדוּדֶיהָ בִּרְבִיבִים תְּמֹגְגֶנָּה צִמְחָהּ תְּבָרֵךְ',
                            en: 'You water its furrows abundantly; You settle its ridges; you make it soft with showers; You bless its growth.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'pastures',
                    texts: {
                        textSays: {
                            he: 'דְּשָׁאִים אוֹמְרִים',
                            en: 'The Grasses say',
                            fr: '',
                        },
                        textMain: {
                            he: 'יְהִי כְבוֹד יְהוָה לְעוֹלָם יִשְׂמַח יְהוָה בְּמַעֲשָׂיו',
                            en: 'May the glory of God endure forever; may God rejoice in His works.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'special chapter chapter4 sky',
                    special: {
                        title: {
                            he: 'פרק רביעי',
                            en: 'Chapter 4',
                            fr: 'Chapitre 4'
                        }
                    }
                },
                {
                    cssClass: 'rooster',
                    texts: {
                        textSays: {
                            he: 'תַּרְנְגוֹל אוֹמֵר',
                            en: 'The Rooster says',
                            fr: '',
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
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'hen',
                    texts: {
                        textSays: {
                            he: 'תַּרְנְגֹלֶת אוֹמֶרֶת',
                            en: 'The Hen says',
                            fr: '',
                        },
                        textMain: {
                            he: 'נֹתֵן לֶחֶם לְכָל בָּשָׂר כִּי לְעוֹלָם חַסְדּוֹ',
                            en: 'He gives bread to all flesh, for His kindness endures forever.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'dove',
                    texts: {
                        textSays: {
                            he: 'יוֹנָה אוֹמֶרֶת',
                            en: 'The Dove says',
                            fr: '',
                        },
                        textMain: {
                            he: `כְּסוּס עָגוּר כֵּן אֲצַפְצֵף אֶהְגֶּה כַּיּוֹנָה דַּלּוּ עֵינַי לַמָּרוֹם אֲדֹנָי עָשְׁקָה לִּי עָרְבֵנִי׃ (ישעיה לח, יד)<br>אוֹמֶרֶת יוֹנָה לִפְנֵי הַקָּדוֹשׁ בָּרוּךְ הוּא רִבּוֹנוֹ שֶׁל עוֹלַם יִהְיוּ מְזוֹנוֹתַי מְרוֹרִים כְּזַיִת בְּיָדְךָ וְאַל יִהְיוּ מְתוּקִים כִּדְבַשׁ עַל יְדֵי בַּשָּׁר וְדָם`,
                            en: 'Like a swift or crane, so do I chatter; I moan like a dove; my eyes fail with looking upward; O God, I am oppressed, be my senility.&rdquo; <span class="quote-source">(Isaiah 38:14)</span><br>The dove says before The Holy One, Blessed be He: &ldquo;Master of the World! May my sustenance be as bitter as an olive in Your Hand, rather than it being sweet as honey through flesh and blood.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'eagle',
                    texts: {
                        textSays: {
                            he: 'נֶשֶׁר אוֹמֵר',
                            en: 'The Eagle says',
                            fr: '',
                        },
                        textMain: {
                            he: 'וְאַתָּה יְהוָה אֱלֹהִים צְבָאוֹת אֱלֹהֵי יִשְׂרָאֵל הָקִיצָה לִפְקֹד כָּל הַגּוֹיִם אַל תָּחֹן כָּל בֹּגְדֵי אָוֶן סֶלָה',
                            en: 'And You, God, Lord of Hosts, Lord of Israel, awake to punish all the nations; do not be gracious to any wicked traitors, Selah!',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'heron',
                    texts: {
                        textSays: {
                            he: 'עָגוּר אוֹמֵר',
                            en: 'The Crane says',
                            fr: '',
                        },
                        textMain: {
                            he: 'הוֹדוּ לַיהוָה בְּכִנּוֹר בְּנֵבֶל עָשׂוֹר זַמְּרוּ לוֹ',
                            en: 'Give thanks to God with the lyre, make music for Him with the ten-stringed harp.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'swallow',
                    texts: {
                        textSays: {
                            he: 'צִפּוֹר אוֹמֵר',
                            en: 'The Bird says',
                            fr: '',
                        },
                        textMain: {
                            he: 'גַּם צִפּוֹר מָצְאָה בַיִת וּדְרוֹר קֵן לָהּ אֲשֶׁר שָׁתָה אֶפְרֹחֶיהָ אֶת מִזְבְּחוֹתֶיךָ יְהוָה צְבָאוֹת מַלְכִּי וֵאלֹהָי',
                            en: 'The songbird has also found her home, and the sparrow a nest for herself, where she may lay her young &mdash; Your altars, God of Hosts, my King and my Lord.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'sparrow',
                    texts: {
                        textSays: {
                            he: 'סְנוּנִית אוֹמֶרֶת',
                            en: 'The Swallow says',
                            fr: '',
                        },
                        textMain: {
                            he: 'לְמַעַן יְזַמֶּרְךָ כָבוֹד וְלֹא יִדֹּם יְהוָה אֱלֹהַי לְעוֹלָם אוֹדֶךָּ',
                            en: 'So that my soul shall praise You, and shall not be silent, God my Lord, I shall give thanks to You forever.',
                            fr: '',
                        },
                        textSource: {
                            he: 'טַסִּית אוֹמֶרֶת',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'albatross',
                    texts: {
                        textSays: {
                            he: 'טַסִּית אוֹמֶרֶת',
                            en: 'The Swift says',
                            fr: '',
                        },
                        textMain: {
                            he: 'עֶזְרִי מֵעִם יְהוָה עֹשֵׂה שָׁמַיִם וָאָרֶץ',
                            en: 'My help is from God, Maker of Heaven and earth.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'owl',
                    texts: {
                        textSays: {
                            he: 'צִיָּה אוֹמֶרֶת',
                            en: 'The Tsiya (Stormy petrel/Petrel?) says',
                            fr: '',
                        },
                        textMain: {
                            he: 'אוֹר זָרֻעַ לַצַּדִּיק וּלְיִשְׁרֵי לֵב שִׂמְחָה',
                            en: 'Light is sown for the righteous, and joy for the straight-hearted.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'retsipi',
                    texts: {
                        textSays: {
                            he: 'רְצִפִי אוֹמֵר',
                            en: 'The Retsipi (Laughing dove/Bat/Owl?) says',
                            fr: '',
                        },
                        textMain: {
                            he: 'נַחֲמוּ נַחֲמוּ עַמִּי יֹאמַר אֱלֹהֵיכֶם',
                            en: 'Be comforted, My people, be comforted, says your God.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'stork',
                    texts: {
                        textSays: {
                            he: 'חֲסִידָה אוֹמֶרֶת',
                            en: 'The Stork says',
                            fr: '',
                        },
                        textMain: {
                            he: 'דַּבְּרוּ עַל לֵב יְרוּשָׁלַים וְקִרְאוּ אֵלֶיהָ כִּי מָלְאָה צְבָאָהּ כִּי נִרְצָה עֲוֹנָהּ כִּי לָקְחָה מִיַּד יְהוָה כִּפְלַיִם בְּכָל חַטֹּאתֶיהָ',
                            en: 'Speak to the heart of Jerusalem, and call to her, for her time has arrived, for her sins have been pardoned, for she has taken double from God&rsquo;s hand for all her sins.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'crow',
                    texts: {
                        textSays: {
                            he: 'עוֹרֵב אוֹמֵר',
                            en: 'The Crow says',
                            fr: '',
                        },
                        textMain: {
                            he: 'מִי יָכִין לָעֹרֵב צֵידוֹ כִּי יְלָדָיו אֶל אֵל יְשַׁוֵּעוּ יִתְעוּ לִבְלִי אֹכֶל',
                            en: 'Who prepares food for the raven, when his young ones cry out to God?',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'starling',
                    texts: {
                        textSays: {
                            he: 'זַרְזִיר אוֹמֵר',
                            en: 'The Starling says',
                            fr: '',
                        },
                        textMain: {
                            he: 'וְנוֹדַע בַּגּוֹיִם זַרְעָם וְצֶאֱצָאֵיהֶם בְּתוֹךְ הָעַמִּים כָּל רֹאֵיהֶם יַכִּירוּם כִּי הֵם זֶרַע בֵּרַךְ יְהוָה',
                            en: 'Their seed shall be known among the nations, and their offspring among the peoples; all who see them shall acknowledge them, that they are the seed which God has blessed.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'goose',
                    texts: {
                        textSays: {
                            he: 'אֲוַז שֶׁבַּבַּיִת אוֹמֶרֶת',
                            en: 'The Domestic Goose says',
                            fr: '',
                        },
                        textMain: {
                            he: 'הוֹדוּ לַיהוָה קִרְאוּ בִּשְׁמוֹ הוֹדִיעוּ בָעַמִּים עֲלִילוֹתָיו׃ שִׁירוּ לוֹ זַמְּרוּ לוֹ שִׂיחוּ בְּכָל נִפְלְאוֹתָיו׃',
                            en: 'Give thanks to God, call upon His Name, make His works known amongst the peoples, sing to Him, make music for Him, speak of all His wonders.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'wild-goose',
                    texts: {
                        textSays: {
                            he: 'אֲוַז הַבָּר הַמְּשׁוֹטֶטֶת בַּמִּדְבָּר. כְּשֶׁרוֹאֵה אֶת יִשְׂרָאֵל עוֹסְקִים בַּתּוֹרָה אוֹמֶרֶת',
                            en: 'The Wild Goose flying in the wilderness, when it sees Israel busy with Torah, says',
                            fr: '',
                        },
                        textMain: {
                            he: 'קוֹל קוֹרֵא בַּמִּדְבָּר פָּנוּ דֶּרֶךְ יי יַשְׁרוּ בַּעֲרָבָה מְסִלָּה לֶאֱלֹהֵינוּ וְעַל מְצִיאוּת מְזוֹנוֹתֶיהָ בַּמִּדְבָּר אוֹמֶרֶת. אָרוּר הַגֶּבֶר אַשֵּׁר יִבְטַח בָּאָדָם בָּרוּךְ הַגֶּבֶר אֲשֶׁר יִבְטַח בְּיי וְהָיָה יי מִבְטָחוֹ',
                            en: 'A voice cries, Prepare in the desert the way of God, make straight in the desert a path for our God.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'chicken',
                    texts: {
                        textSays: {
                            he: 'פְרוֹגִיוֹת אוֹמְרִים',
                            en: 'The chickens say',
                            fr: '',
                        },
                        textMain: {
                            he: 'בִּטְחוּ בַיהוָה עֲדֵי עַד כִּי בְּיָהּ יְהוָה צוּר עוֹלָמִים',
                            en: 'Trust in God forever, for God, the Eternal, is the strength of worlds [the everlasting rock].',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'cormorant',
                    texts: {
                        textSays: {
                            he: 'רַחֲמָהּ אוֹמֶרֶת',
                            en: 'The Egyptian vulture says',
                            fr: '',
                        },
                        textMain: {
                            he: 'אֶשְׁרְקָה לָהֶם וַאֲקַבְּצֵם כִּי פְדִיתִים וְרָבוּ כְּמוֹ רָבוּ',
                            en: 'I will whistle to them and gather them, for I have redeemed them, and they shall increase as they have before increased.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'locust',
                    texts: {
                        textSays: {
                            he: 'צִפֹּרֶת כְּרָמִים אוֹמֶרֶת',
                            en: 'The Grasshopper says',
                            fr: '',
                        },
                        textMain: {
                            he: 'אֶשָּׂא עֵינַי אֶל הֶהָרִים מֵאַיִן יָבֹא עֶזְרִי',
                            en: 'I lift my eyes up to the mountains, where shall my help come from?',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'grasshopper',
                    texts: {
                        textSays: {
                            he: 'חָסִיל אוֹמֵר',
                            en: 'The Locust says',
                            fr: '',
                        },
                        textMain: {
                            he: 'יְהוָה אֱלֹהַי אַתָּה אֲרוֹמִמְךָ אוֹדֶה שִׁמְךָ כִּי עָשִׂיתָ פֶּלֶא עֵצוֹת מֵרָחוֹק אֱמוּנָה אֹמֶן',
                            en: 'O God, You are my Lord; I will exalt You, I will praise Your Name; for You have done wondrous things; Your counsels of old are faithfulness and truth.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'lizard',
                    texts: {
                        textSays: {
                            he: 'שְׂמָמִית אוֹמֶרֶת',
                            en: 'The Semamit (Spider/Gecko?) says',
                            fr: '',
                        },
                        textMain: {
                            he: 'הַלְלוּהוּ בְצִלְצְלֵי שָׁמַע הַלְלוּהוּ בְּצִלְצְלֵי תְרוּעָה',
                            en: 'Praise Him with sounding cymbals! Praise Him with loud clashing cymbals!',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'fly',
                    texts: {
                        textSays: {
                            he: 'זְבוּב אוֹמֵר. בְּשָׁעָה שֶׁאֵין יִשְׂרָאֵל עוֹסְקִים בַּתּוֹרָה',
                            en: 'The Fly, when Israel is not busying itself with Torah, says',
                            fr: '',
                        },
                        textMain: {
                            he: `קוֹל אֹמֵר קְרָא וְאָמַר מָה אֶקְרָא כָּל הַבָּשָׂר חָצִיר וְכָל חַסְדּוֹ כְּצִיץ הַשָּׂדֶה׃ יָבֵשׁ חָצִיר נָבֵל צִיץ כִּי רוּחַ יְהוָה נָשְׁבָה בּוֹ אָכֵן חָצִיר הָעָם׃ יָבֵשׁ חָצִיר נָבֵל צִיץ וּדְבַר אֱלֹהֵינוּ יָקוּם לְעוֹלָם׃ (ישעיה מ, ו) :בּוֹרֵא נִיב שְׂפָתָיִם שָׁלוֹם שָׁלוֹם לָרָחוֹק וְלַקָּרוֹב אָמַר יְהוָה וּרְפָאתִיו`,
                            en: 'The voice said, &lsquo;Call out.&rsquo; And he said, &lsquo;What shall I call out? All flesh is grass, and all its grace is as the flower of the field.&rsquo; &lsquo;...The grass withers, the flower fades; but the word of our Lord shall endure forever.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'cetacean',
                    texts: {
                        textSays: {
                            he: 'תַּנִּינִים אוֹמְרִים',
                            en: 'The Giant Sea Creatures say',
                            fr: '',
                        },
                        textMain: {
                            he: 'הַלְלוּ אֶת יְהוָה מִן הָאָרֶץ תַּנִּינִים וְכָל תְּהֹמוֹת',
                            en: 'Praise Hashem from the earth, the giant sea creatures and the depths.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'whale',
                    texts: {
                        textSays: {
                            he: 'לִוְיָתַן אוֹמֵר',
                            en: 'The Leviathan says',
                            fr: '',
                        },
                        textMain: {
                            he: 'הוֹדוּ לַיהוָה כִּי טוֹב כִּי לְעוֹלָם חַסְדּוֹ',
                            en: 'Give thanks to God for He is good, for His kindness endures forever.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'fish',
                    texts: {
                        textSays: {
                            he: 'דָּגִים אוֹמְרִים',
                            en: 'The Fishes say',
                            fr: '',
                        },
                        textMain: {
                            he: 'קוֹל יְהוָה עַל הַמָּיִם אֵל הַכָּבוֹד הִרְעִים יְהוָה עַל מַיִם רַבִּים',
                            en: 'The voice of God is upon the waters, the God of glory thunders, God is upon many waters.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'frog',
                    texts: {
                        textSays: {
                            he: 'צְפַרְדֵּעַ אוֹמֶרֶת',
                            en: 'The Frog says',
                            fr: '',
                        },
                        textMain: {
                            he: 'בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד',
                            en: 'Blessed is the Name of the honor of His Kingdom for all eternity.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'special chapter chapter5 sky',
                    special: {
                        title: {
                            he: 'פרק חמישי',
                            en: 'Chapter 5',
                            fr: 'Chapitre 5'
                        }
                    }
                },
                {
                    cssClass: 'sheep',
                    texts: {
                        textSays: {
                            he: 'בְּהֵמָה דַּקָּה טְהוֹרָה אוֹמֶרֶת',
                            en: 'The pure small cattle says',
                            fr: '',
                        },
                        textMain: {
                            he: 'מִי כָמֹכָה בָּאֵלִם יְהוָה מִי כָּמֹכָה נֶאְדָּר בַּקֹּדֶשׁ נוֹרָא תְהִלֹּת עֹשֵׂה פֶלֶא',
                            en: 'Who is like You among the mighty ones, God, who is like You, mighty in holiness, awesome in praise, worker of wonders.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'cows',
                    texts: {
                        textSays: {
                            he: 'בְּהֵמָה גַּסָּה טְהוֹרָה אוֹמֶרֶת',
                            en: 'The pure large cattle say',
                            fr: '',
                        },
                        textMain: {
                            he: 'הַרְנִינוּ לֵאלֹהִים עוּזֵּנוּ הָרִיעוּ לֵאלֹהֵי יַעֲקֹב',
                            en: 'Rejoice to the Lord over our strength, trumpet to the Lord of Yaakov!',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'pigs',
                    texts: {
                        textSays: {
                            he: 'בְּהֵמָה דַּקָּה טְמֵאָה אוֹמֶרֶת',
                            en: 'The impure small cattle says',
                            fr: '',
                        },
                        textMain: {
                            he: 'הֵיטִיבָה יְהוָה לַטּוֹבִים וְלִישָׁרִים בְּלִבּוֹתָם',
                            en: 'God is good to the good, and to the straight-hearted',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'hippo',
                    texts: {
                        textSays: {
                            he: 'בְּהֵמָה גַּסָּה טְמֵאָה אוֹמֶרֶת',
                            en: 'The impure large cattle says',
                            fr: '',
                        },
                        textMain: {
                            he: 'יְגִיעַ כַּפֶּיךָ כִּי תֹאכֵל אַשְׁרֶיךָ וְטוֹב לָךְ',
                            en: 'When you eat the fruit of your labors, happy are you and good is your lot.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'camel',
                    texts: {
                        textSays: {
                            he: 'גַּמַּל אוֹמֵר',
                            en: 'The Camel says',
                            fr: '',
                        },
                        textMain: {
                            he: 'יְהוָה מִמָּרוֹם יִשְׁאָג וּמִמְּעוֹן קָדְשׁוֹ יִתֵּן קוֹלוֹ שָׁאֹג יִשְׁאַג עַל נָוֵהוּ',
                            en: 'God shall roar from upon high and cause His voice to sound forth from His holy place, His shout echoes profoundly over His dwelling place.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'horses',
                    texts: {
                        textSays: {
                            he: 'סוּס אוֹמֵר',
                            en: 'The Horse says',
                            fr: '',
                        },
                        textMain: {
                            he: 'הִנֵּה כְעֵינֵי עֲבָדִים אֶל יַד אֲדוֹנֵיהֶם כְּעֵינֵי שִׁפְחָה אֶל יַד גְּבִרְתָּהּ כֵּן עֵינֵינוּ אֶל יְהוָה אֱלֹהֵינוּ עַד שֶׁיְּחָנֵּנוּ',
                            en: 'Behold, as the eyes of the servants to the hand of their master, as the eyes of the maidservant to the hand of her mistress, so are our eyes to God our Lord until He will favor us.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'mule',
                    texts: {
                        textSays: {
                            he: 'פֶּרֶד אוֹמֵר',
                            en: 'The Mule says',
                            fr: '',
                        },
                        textMain: {
                            he: 'יוֹדוּךָ יְהוָה כָּל מַלְכֵי אָרֶץ כִּי שָׁמְעוּ אִמְרֵי פִיךָ',
                            en: 'All the kings of the earth shall acknowledge You, God, for they have heard the sayings of Your mouth.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'donkey',
                    texts: {
                        textSays: {
                            he: 'חֲמוֹר אוֹמֵר',
                            en: 'The Donkey says',
                            fr: '',
                        },
                        textMain: {
                            he: 'לְךָ יְהוָה הַגְּדֻלָּה וְהַגְּבוּרָה וְהַתִּפְאֶרֶת וְהַנֵּצַח וְהַהוֹד כִּי כֹל בַּשָּׁמַיִם וּבָאָרֶץ לְךָ יְהוָה הַמַּמְלָכָה וְהַמִּתְנַשֵּׂא לְכֹל לְרֹאשׁ',
                            en: 'Yours, God, is the greatness, and the might, and the splendor, and the victory, and the glory, for everything in the Heavens and earth [is Yours]; Yours, God, is the kingship, and the exaltation over all.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'bull',
                    texts: {
                        textSays: {
                            he: 'שׁוֹר אוֹמֵר',
                            en: 'The Bull (Ox) says',
                            fr: '',
                        },
                        textMain: {
                            he: 'אָז יָשִׁיר מֹשֶׁה וּבְנֵי יִשְׂרָאֵל אֶת הַשִּׁירָה הַזֹּאת לַיהוָה וַיֹּאמְרוּ לֵאמֹר אָשִׁירָה לַיהוָה כִּי גָאֹה גָּאָה סוּס וְרֹכְבוֹ רָמָה בַיָּם',
                            en: 'Then Moshe and the Children of Israel sang this song to God, and they said, I shall sing to God, for He has triumphed; He has thrown the horse and its rider into the sea.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'girafe',
                    texts: {
                        textSays: {
                            he: 'חַיּוֹת הַשָּׂדֶה אוֹמְרִים',
                            en: 'The Wild Animals say',
                            fr: '',
                        },
                        textMain: {
                            he: 'בָּרוּךְ הַטּוֹב וְהַמֵּטִיב',
                            en: 'Blessed is the One Who is good and bestows good.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'deer',
                    texts: {
                        textSays: {
                            he: 'צְבִי אוֹמֵר',
                            en: 'The Gazelle says',
                            fr: '',
                        },
                        textMain: {
                            he: 'וַאֲנִי אָשִׁיר עֻזֶּךָ וַאֲרַנֵּן לַבֹּקֶר חַסְדֶּךָ כִּי הָיִיתָ מִשְׂגָּב לִי וּמָנוֹס בְּיוֹם צַר לִי',
                            en: 'And I shall sing of Your strength, I shall rejoice of Your kindness in the morning, for You were a refuge to me, and a hiding place on the day of my oppression.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'elephant',
                    texts: {
                        textSays: {
                            he: 'פִּיל אוֹמֵר',
                            en: 'The Elephant says',
                            fr: '',
                        },
                        textMain: {
                            he: 'מַה גָּדְלוּ מַעֲשֶׂיךָ יְהוָה מְאֹד עָמְקוּ מַחְשְׁבֹתֶיךָ',
                            en: 'How great are Your works, God; Your thoughts are tremendously deep.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'lion',
                    texts: {
                        textSays: {
                            he: 'אַרְיֵה אוֹמֵר',
                            en: 'The Lion says',
                            fr: '',
                        },
                        textMain: {
                            he: 'יְהוָה כַּגִּבּוֹר יֵצֵא כְּאִישׁ מִלְחָמוֹת יָעִיר קִנְאָה יָרִיעַ אַף יַצְרִיחַ עַל אֹיְבָיו יִתְגַּבָּר',
                            en: 'God shall go out as a mighty man, He shall arouse zeal He shall say, even roar, He shall prevail over His enemies.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'bear',
                    texts: {
                        textSays: {
                            he: 'דֹּב אוֹמֵר',
                            en: 'The Bear says',
                            fr: '',
                        },
                        textMain: {
                            he: 'יִשְׂאוּ מִדְבָּר וְעָרָיו חֲצֵרִים תֵּשֵׁב קֵדָר יָרֹנּוּ יֹשְׁבֵי סֶלַע מֵרֹאשׁ הָרִים יִצְוָחוּ יָשִׂימוּ לַיהוָה כָּבוֹד וּתְהִלָּתוֹ בָּאִיִּים יַגִּידוּ',
                            en: 'Let the wilderness and its cities lift up their voice, the village that Kedar inhabits; let the inhabitants of the rocks sing, let them shout from the peaks of the mountains. Let them give glory to God, and tell of His praise in the islands.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'wolf',
                    texts: {
                        textSays: {
                            he: 'זְאֵב אוֹמֵר',
                            en: 'The Wolf says',
                            fr: '',
                        },
                        textMain: {
                            he: 'עַל כָּל דְּבַר־פֶּשַׁע עַל שׁוֹר עַל חֲמוֹר עַל שֶׂה עַל שַׂלְמָה עַל כָּל אֲבֵדָה אֲשֶׁר יֹאמַר כִּי הוּא זֶה עַד הָאֱלֹהִים יָבֹא דְּבַר שְׁנֵיהֶם אֲשֶׁר יַרְשִׁיעֻן אֱלֹהִים יְשַׁלֵּם שְׁנַיִם לְרֵעֵהוּ',
                            en: 'For every matter of iniquity, for the ox, the donkey, the lamb, the garment, for every lost item about which he says, &lsquo;This is it,&rsquo; the matter of both of them shall come before the judge; he who the judge finds guilty shall pay double to the other.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'fox',
                    texts: {
                        textSays: {
                            he: 'שׁוּעָל אוֹמֵר',
                            en: 'The Fox says',
                            fr: '',
                        },
                        textMain: {
                            he: 'הוֹי בֹּנֶה בֵיתוֹ בְּלֹא צֶדֶק וַעֲלִיּוֹתָיו בְּלֹא מִשְׁפָּט בְּרֵעֵהוּ יַעֲבֹד חִנָּם וּפֹעֲלוֹ לֹא יִתֶּן לוֹ',
                            en: 'Woe to him that builds his house without justice, and his chambers without lawfulness; that uses his friend&rsquo;s service without wages, and does not give him for his hire.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'greyhound',
                    texts: {
                        textSays: {
                            he: 'זַרְזִיר אוֹמֵר',
                            en: 'The Hound says',
                            fr: '',
                        },
                        textMain: {
                            he: 'רַנְּנוּ צַדִּיקִים בַּיהוָה לַיְשָׁרִים נָאוָה תְהִלָּה',
                            en: 'Let the righteous rejoice in God, praise is befitting to the straight',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'cat',
                    texts: {
                        textSays: {
                            he: 'חָתוּל אוֹמֵר',
                            en: 'The Cat says',
                            fr: '',
                        },
                        textMain: {
                            he: 'אֶרְדּוֹף אוֹיְבַי וְאַשִּׂיגֵם וְלֹא אָשׁוּב עַד כַּלּוֹתָם',
                            en: 'If you rise up like a vulture, and place your nest among the stars, from there I shall bring you down, says God.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'special chapter chapter6 sky',
                    special: {
                        title: {
                            he: 'פרק שישי',
                            en: 'Chapter 6',
                            fr: 'Chapitre 6'
                        }
                    }
                },
                {
                    cssClass: 'crocodile',
                    texts: {
                        textSays: {
                            he: 'שְׁרָצִים אוֹמְרִים',
                            en: 'The Creeping Creatures say',
                            fr: '',
                        },
                        textMain: {
                            he: 'יִשְׂמַח יִשְׂרָאֵל בְּעֹשָׂיו בְּנֵי צִיּוֹן יָגִילוּ בְמַלְכָּם',
                            en: 'Let Israel rejoice in He Who made him; let the children of Zion be joyful in their King.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'komodo-dragon',
                    texts: {
                        textSays: {
                            he: 'אֵלִים שֶׁבַּשְּׁרָצִים אוֹמְרִים',
                            en: 'The Prolific Creeping Creatures say',
                            fr: '',
                        },
                        textMain: {
                            he: 'אֶשְׁתְּךָ כְּגֶפֶן פֹּרִיָּה בְּיַרְכְּתֵי בֵיתֶךָ בָּנֶיךָ כִּשְׁתִלֵי זֵיתִים סָבִיב לְשֻׁלְחָנֶךָ',
                            en: 'Your wife shall be like a fruittful vine in the recesses of your house; your children like olive shoots around your table.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'snake',
                    texts: {
                        textSays: {
                            he: 'נָחָשׁ אוֹמֵר',
                            en: 'The Snake says',
                            fr: '',
                        },
                        textMain: {
                            he: 'סוֹמֵךְ יְהוָה לְכָל הַנֹּפְלִים וְזוֹקֵף לְכָל הַכְּפוּפִים',
                            en: 'God supports all the fallen, and straightens all the bent.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'scorpion',
                    texts: {
                        textSays: {
                            he: 'עַקְרַב אוֹמֵר',
                            en: 'The Scorpion says',
                            fr: '',
                        },
                        textMain: {
                            he: 'טוֹב יְהוָה לַכֹּל וְרַחֲמָיו עַל כָּל־מַעֲשָׂיו',
                            en: 'God is good to all, and His mercy is upon all of His handiwork.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'snail',
                    texts: {
                        textSays: {
                            he: 'שַׁבְּלוּל אוֹמֵר',
                            en: 'The Snail says',
                            fr: '',
                        },
                        textMain: {
                            he: 'כְּמוֹ שַׁבְּלוּל תֶּמֶס יַהֲלֹךְ נֵפֶל אֵשֶׁת בַּל חָזוּ שָׁמֶשׁ',
                            en: 'Like the snail that melts away, the stillborn of a mole that does not see the sun.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'ants',
                    texts: {
                        textSays: {
                            he: 'נְמָלָה אוֹמֶרֶת',
                            en: 'The Ant says',
                            fr: '',
                        },
                        textMain: {
                            he: 'לֵךְ אֶל נְמָלָה עָצֵל רְאֵה דְרָכֶיהָ וַחֲכָם',
                            en: 'Go to the ant, you sluggard; consider her ways, and be wise.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'mouse',
                    texts: {
                        textSays: {
                            he: 'עַכְבַּר אוֹמֵר',
                            en: 'The Mouse says',
                            fr: '',
                        },
                        textMain: {
                            he: 'וְאַתָּה צַדִּיק עַל כָּל הַבָּא עָליּ כִּי אֱמֶת עָשִׂיתָ וַאניּ הִרְשָׁעתיּ',
                            en: 'And You are just for all that comes upon me, for You have acted in truth and I have been wicked.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'rat',
                    texts: {
                        textSays: {
                            he: 'חֻלְדָּה אוֹמֶרֶת',
                            en: 'The Rat says',
                            fr: '',
                        },
                        textMain: {
                            he: 'כֹּל הַנְּשָׁמָה תְּהַלֵּל יָהּ הַלְלוּיָהּ',
                            en: 'Let every soul praise God, Halleluyah!',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'dogs',
                    texts: {
                        textSays: {
                            he: 'כְּלָבִים אוֹמְרִים',
                            en: 'The Dogs say',
                            fr: '',
                        },
                        textMain: {
                            he: 'בֹּאוּ נִשְׁתַּחֲוֶה וְנִכְרָעָה נִבְרְכָה לִפְנֵי יְהוָה עֹשֵׂנוּ',
                            en: 'Come, let us worship and bow down; let us kneel before God our Maker.',
                            fr: '',
                        },
                        textSource: {
                            he: '',
                            en: '',
                            fr: '',
                        },
                    }
                },
                {
                    cssClass: 'special end sky',
                    special: {
                        title: {
                            he: 'סוף פרק שירה',
                            en: 'End of Perek Shira',
                            fr: 'Fin du Perek Chira'
                        },
                        desc: {
                            he: 'החלק כדי להמשיך',
                            en: 'Swipe to continue',
                            fr: 'Faire glisser pour continuer'
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
