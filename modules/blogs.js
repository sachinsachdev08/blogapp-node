const express = require('express');
const router = express.Router();

const blogs = [{
    id:1,
    title:"5 ways to animate in React",
    category:"Technology",
    img1:"https://miro.medium.com/max/1400/1*1Z177dpTeAp7uEFc5Zx2xg.png",
    img2:"https://miro.medium.com/max/875/1*08y12Sp1d9cLSKE9nz1EaA.png",
    description:"Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags.",
    paragraph:"Animation in ReactJs app is a popular topic and there are many ways to create different types of animations.Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.Let’s talk about them",
    date:"12 August 2021",
    likes:1500,
    tags:["Technology","React","Animation"],
    user:"Rohan Singh",
    joined:"19 April 2020"
},
{
    id:2,
    category:"Bollywood",
    title:"Sooryavanshi Day 1 Box Office Collection",
    img1:"https://blogtobollywood.com/wp-content/uploads/2021/11/Sooryavanshi-Day-1-box-office-collection.jpeg",
    img2:"https://blogtobollywood.com/wp-content/uploads/2021/11/Sooryavanshi-Day-1-box-office-collection.jpeg",
    description:"Sooryavanshi first day box office collection: Akshay Kumar starter Sooryavanshi is off to a bumper opening, collected Rs 26.29 crore on its first day.",
    paragraph:"With the opening day collection of Rs 26.29 crores, Sooryavanshi is now the second-highest opening day grosser for Akshay Kumar after Mission Mangal, which had grossed Rs 29.16 crore on its opening day. Check the list of Akshay Kumar highest opening day grossers.Akshay Kumar starrer created tremendous pre-release buzz and was always expected to take a good opening at the box office. However, it has exceeded expectations and set the box office on fire. A bumper opening is a testimony that the audience is ready to come out and enjoy movies in theatres.",
    date:"13 October 2021",
    likes:3000,
    tags:["Bollywood", "Sooryavanshi", "Akshay Kumar"],
    user:"Yash",
    joined:"23 October 2020"

},

{
    id:3,
    title:"Velveeta Mac and Cheese",
    category:"Food",
    img1:"https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/09/velveeta-mac-and-cheese-6989w-2048x1366.webp",
    img2:"https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/09/velveeta-mac-and-cheese-6989w-2048x1366.webp",
    description:"If you’re looking for the creamy mac and cheese of your childhood, this is it! Homemade Velveeta cheese sauce with tender mac is what mac and cheese dreams are made of.",
    paragraph:"These days we have fancy mac and cheese with gruyere and breadcrumbs and all that, but do you ever dream of just easy plain mac and cheese, like the box kind, but without the powdered cheese and that mushy pasta? Enter this Velveeta mac and cheese.",
    date:"14 November 2021",
    likes:9000,
    tags:["Food","Cheese","tutorial"],
    user:"Nikhil",
    joined:"12 June 2020"

},  
{
    id:4,
    title:"Red Notice Sequel",
    category:"Hollywood",
    img1:"https://blogtobollywood.com/wp-content/uploads/2021/11/Red-Notice-2.jpg",
    img2:"https://blogtobollywood.com/wp-content/uploads/2021/11/Red-Notice-2.jpg",
    description:"Dwayne Johnson, Ryan Reynolds, and Gal Gadot could return for Red Notice 2, and here’s everything we know about it.",
    paragraph:"Fans are absolutely loving Netflix’s latest action-comedy movie Red Notice. Premiered on Nov 12, 2021, the big-budget spectacle records the biggest opening in Netflix history. It garnered more than 4 million views in the first weekend in the United States. This feat becomes even more impressive as critics have penned down the movie and it has premiered on Netflix post a limited release in theatres on Nov 5, 2021.",
    date:"15 November 2021",
    likes:6000,
    tags:["Hollywood","Dwayne Johnshon", "Ryan Reynolds"],
    user:"Rohit",
    joined:"10 December 2020"
    
},
{
    id:5,
    title:"Change Your Breathing, Change Your Life",
    category:"Fitness",
    img1:"https://acewebcontent.azureedge.net/blogs/ChangeBreathingChangeLife_Header.png",
    img2:"https://acewebcontent.azureedge.net/blogs/ChangeBreathingChangeLife_Header.png",
    description:"Your environment, stress and how you breathe can alter and even impede your breathing, but simply practicing nasal breathing may be the key to tapping into some powerful health and fitness benefits.",
    paragraph:"The good news is that simply practicing nasal breathing can turn it all around.Taking slower, longer breaths in and out through your nose can help with everything from reducing anxiety to boosting athletic performance. Basically, nasal breathing slows your rate of breathing down, which means your body doesn’t have to work as hard to get oxygen into your bloodstream. This is great for overall health and athletic performance, according to a 2018 study in the International Journal of Kinesiology and Sports Science.",
    date:"12 June 2021",
    likes:5000,
    tags:["Fitness","Environment","Nature"],
    user:"Rohit Gupta",
    joined:"12 June 2020"
},
{
    id:6,
    title:"Don't Buy an HDMI 2.1 TV or Monitor Before You Read the Fine Printt",
    category:"Technology",
    img1:"https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/d5910c6ceeadadfdf8de937248d679f1.jpg",
    img2:"https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/d5910c6ceeadadfdf8de937248d679f1.jpg",
    description:"Just like USB, SD, and other ports, not every HDMI input is the same, and using the right one could have a marked effect on things like picture quality, frame rates, and latency.",
    paragraph:"TFTCentral smelled something fishy when it saw that a Xiaomi monitor with HDMI 2.1 support only reached the specifications for HDMI 2.0. Instead of 4K resolution, the panel was limited to 1080p. And the thing is, Xiaomi technically didn’t do anything wrong. It all comes down to semantics and some murky (and consumer-hostile) guidelines set by the HDMI Licensing Administrator.In this case, Xiaomi was compliant in the eyes of the HDMI gods for burying this small endnote within the terms and conditions: “Due to the subdivision of HDMI certification standards, HDMI 2.1 is divided into TMDS (the bandwidth is equivalent to the original HDMI 2.0 and FRL protocols). The HDMI 2.1 interface of this product supports the TMDS protocol, the maximum supported resolution is 1920×1080, and the maximum refresh rate is 240Hz.”",
    likes:900,
    tags:["Technology","TV/Monitors","HDMI"],
    user:"Rohan Singh",
    joined:"19 April 2020",
    date:"10 September 2020"
},
{
    id:7,
    category:"Bollywood",
    title:"Dhamaka",
    img1:"https://blogtobollywood.com/wp-content/uploads/2021/10/Dhamaka-Netflix-Release-Date.jpg",
    img2:"https://blogtobollywood.com/wp-content/uploads/2021/10/Dhamaka-Netflix-Release-Date.jpg",
    description:"Kartik Aaryan will be seen in a never seen before avatar in Ram Madhvani’s next titled Dhamaka. The action-thriller is based on the 2013 South Korean movie The Terror Live.",
    paragraph:"Kartik Aaryan is playing the lead role of a journalist named Arjun Pathak. This is the first time Kartik is starring in an action thriller. Mrunal Thakur stars as Soumya Mehra Pathak, Arjun’s wife. Earlier Yami Gautam was cast as Kartik’s wife but she rejected the movie due to a busy schedule. The movie also stars Amruta Subhash, playing Arjun’s boss, Vikash Kumar, and Vishwajeet Pradhan.",
    date:"10 December 2021",
    likes:70,
    tags:["Bollywood", "Dhamaka", "Kartik Aryan"],
    user:"Yash",
    joined:"23 October 2020"

},

{
    id:8,
    title:"Chicken Caesar Salad",
    category:"Food",
    img1:"https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/08/chicken-caesar-salad-5709w-1536x1025.webp",
    img2:"https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/08/chicken-caesar-salad-5709w-1536x1025.webp",
    description:"The best chicken caesar salad: crisp romaine lettuce, kale, garlicky croutons, air fried chicken breast, homemade caesar dressing, and so much more, because you're worth it.",
    paragraph:"For some reason it tastes so much better than me making chicken caesar salad at home. Only thing is, it’s ridiculously expensive. Especially because I know that for the price I pay, I can probably make myself at least 4 salads.So, to save my wallet, I recreated it at home. It is glorious! Crunchy, crisp romaine lettuce, kale, grated Parmigiano Reggiano, garlicky croutons, roasted chicken breast, toasted cashews, a ramen egg, a lemon wedge for squeezing, and homemade caesar dressing. ",
    likes:3000,
    tags:["Food","Chicken","tutorial"],
    user:"Nikhil",
    joined:"12 June 2020",
    date:"2 October 2021"

},  
{
    id:9,
    title:"The Yellowstone prequel ‘1883’ debuts on Dec 19, 2021.",
    category:"Hollywood",
    img1:"https://blogtobollywood.com/wp-content/uploads/2021/12/1883-streaming.jpg",
    img2:"https://blogtobollywood.com/wp-content/uploads/2021/12/1883-streaming.jpg",
    description:"Yellowstone’s prequel ‘1883’ debuts on Paramount+ on Dec 19, 2021.The first two episodes will also air on Paramount Network following the new episodes of Yellowstone.",
    paragraph:"So, the popular Yellowstone franchise is expanding. Yellowstone prequel series 1883 is almost upon us and fans are super excited. For loyal Yellowstone fans, it’s time to mark the dates as new series premieres on coming Sunday. So, what information do we have about 1883? How to watch the series live? What are the streaming options available? Yellowstone prequel 1883 premieres on Dec 19, 2021, exclusively on Paramount+. The first two episodes will also air on Paramount Network following Yellowstone Season 4 episodes. Its successive episodes will be available exclusively on Paramount+.",
    date:"15 December 2021",
    likes:400,
    tags:["Hollywood", "1883","Yellow Stone"],
    user:"Rohit",
    joined:"10 December 2020"
},
{
    id:10,
    title:"Rest and Relaxation is not a Luxury, it is a Necessity",
    category:"Fitness",
    img1:"https://acewebcontent.azureedge.net/blogs/Rest_and_Relaxation_is_Not_a_Luxury.jpg",
    img2:"https://acewebcontent.azureedge.net/blogs/ChangeBreathingChangeLife_Header.png",
    description:"No pain, no gain.If it’s easy, you’re doing it wrong.If you’re not sweating, you’re not really exercising.",
    paragraph:"You have probably heard statements like these before, but they leave the wrong impression about exercise. Fortunately, more people are beginning to recognize that the key to making progress is less about pushing through pain and more about participating in daily movement and exercising to feel good and be able to do the things you love.Optimal health and fitness, the kind all of us need, come from constantly moving your body in ways that keep you available, keep you in the game. Because no matter how hard you can push, if you’re injured or sick, you’re on the bench.",
    date:"19 June 2021",
    likes:6000,
    tags:["Fitness","Sleep","Health"],
    user:"Rohit Gupta",
    joined:"12 June 2020"
},
{
    id:11,
    title:"Samsung's New Android Tablet Could Be a Solid Alternative to the Cheap iPad",
    category:"Technology",
    img1:"https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/d750d1a8ffc79896cbb71df43716284c.jpg",
    img2:"https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/3491186991b5ebd9033aa02d23dbb714.jpg",
    description:"The mid-range Galaxy Tab A8 arrives in January 2022.",
    paragraph:"Android tablets are, against all odds, still alive thanks to the success of Samsung’s Galaxy Tab products, and now the company is launching a new mid-range option. I haven’t seen then Galaxy Tab A8 in person yet, and some important details remain unanswered, but the specs and features suggest the new Tab A8 could be a low-cost option with few compromises.Samsung hasn’t shared official pricing yet, but based on the Tab A7's price of $229 and the Galaxy Tab S7 FE’s $530 price tag, I would venture to guess the Tab A8 will be around $250. Pricing details should be announced soon, considering the Tab A8 will be available in the US in January 2022. The Tab A8 comes in something called Pink Gold, a softer hue of Rose Gold. Blush Gold, perhaps. The other options, gray and silver, are tame.",
    likes:1000,
    tags:["Technology","React","Animation"],
    user:"Rohan Singh",
    joined:"19 April 2020",
    date:"28 November 2021"
},
{
    id:12,
    category:"Bollywood",
    title:"Ranveer Singh’s 83 to Release on This Date",
    img1:"https://blogtobollywood.com/wp-content/uploads/2021/02/83-release-date-Ranveer-Singh.jpg",
    img2:"https://filmfare.wwmindia.com/content/2021/sep/ranveersingh11632650294.jpg",
    description:"Here’s when you can expect to Ranveer Singh and Deepika Padukone’s next movie 83 to release in cinema halls.",
    paragraph:"After bearing huge loss last year due to the pandmic, Bollywood is now hoping for a revival with big releases. After seeing the incredible response to Tollywood’s big-budget movies Krack and Master, Bollywood filmmakers are looking positive to bring their biggies on the big screens. With 100% occupancy allowed in the theatres now, Bollywood filmmakers, distributors and exhibitors are looking more confident than ever. As a result, fans are anticipating the announcement on release dates of Bollywood biggies such as Akshay Kumar’s Sooryavanshi, Salman Khan’s Radhe and Ranveer Singh’s 83 and Ranbir Kapoor’s Brahmastra.Last week we reported that the Rohit Shetty’s most awaited cop drama Sooryavanshi will release on Apr 2, 2021. Now we hear that the makers of Ranveer Singh’ 83 have also locked the release date. According to a source close to the movie, 83, will release on 4 or 11 June.",
    likes:3000,
    tags:["Bollywood", "83", "Ranveer Singh"],
    user:"Yash",
    joined:"23 October 2020",
    date:"10 December 2021"

},

{
    id:13,
    title:"Lo Mein",
    category:"Food",
    img1:"https://iamafoodblog.b-cdn.net/wp-content/uploads/2017/07/lo-mein-0982-Editw-1536x1024.webp",
    img2:"https://iamafoodblog.b-cdn.net/wp-content/uploads/2017/07/lo-mein-0982-Editw-1536x1024.webp",
    description:"Technically there are two kinds of lo mein, Cantonese Hong Kong style and American Chinese take out style. Both are a mixed stir fried noodle dish.",
    paragraph:"Cantonese lo mein is a kind of deconstructed soup noodle: thin and chewy egg noodles served on a plate with toppings and a bowl of soup on the side. The sauce for the noodles isn’t mixed in. Instead, you’re supposed to stir it into the noodles yourself. “Lo” means to mix or stir. Mein, of course, means noodles.American Chinese lo mein is a stir fry noodle dish: thick noodles mixed with a soy sauce based sauce and toppings like beef, pork, chicken, or vegetables.",
    likes:100,
    tags:["Food","Lo Mein","tutorial"],
    user:"Nikhil",
    joined:"12 June 2020",
    date: "8 December 2021  "

},  
{
    id:14,
    title:"‘Spider-Man: No Way Home’ Global Box Office To Sling Minimum $290M In Opening Weekend",
    category:"Hollywood",
    img1:"https://deadline.com/wp-content/uploads/2021/11/spider-man-e1638286090684.jpg?crop=62px%2C69px%2C846px%2C474px&resize=450%2C253",
    img2:"https://deadline.com/wp-content/uploads/2021/12/spider-man.jpg?w=681&h=383&crop=1",
    description:"Sony is seeing at least a $130 million domestic start beginning Thursday, but rivals are thinking much higher in the U.S. and worldwide for a well-reviewed, anticipated Marvel film that could become the highest-grossing Hollywood movie of the pandemic era.",
    paragraph:"For all the mishegaas exhibition has endured during the pandemic including streaming threats, day-and-date window crunching, older demos not showing up, local ordinances and countless release-date changes and eliminations, Sony’s Spider-Man: No Way Home arrives this weekend to save the day.The hope here is that Sony’s theatrical window-respecting release not only jolts the worldwide cinema attendee population back into seats as we head into 2022, but also makes moviegoing a habit once again for the masses.",
    date:"15 November 2021",
    likes:20000,
    tags:["Hollywood", "Tom Holland","Spider-man"]
},
{
    id:15,
    title:"Change Your Breathing, Change Your Life",
    category:"Fitness",
    img1:"https://acewebcontent.azureedge.net/blogs/images/FY22_Q3_11_18_Benefits%20of%20HIIT%20for%20a%20Busy%20Schedule%20GI-1332405541%20header.jpg",
    img2:"https://acewebcontent.azureedge.net/blogs/images/FY22_Q3_11_18_Benefits%20of%20HIIT%20for%20a%20Busy%20Schedule%20GI-1332405541%20header.jpg",
    description:"If you’re not yet convinced that you can fit regular exercise into your already overcrowded schedule, here are seven reasons HIIT workouts may be the answer you’ve been looking for.",
    paragraph:"To achieve substantial health benefits and to produce the results you want, exercise must be done frequently, with enough intensity, and for an appropriate length of time. For long-term results, however, you need to find a form of exercise that you enjoy and that will actually fit into your schedule. High-intensity interval training (HIIT) has become increasingly popular over the past decade or so because the workouts don’t require a lot of time and are extremely effective.",
    date:"12 June 2021",
    likes:5000,
    tags:["Fitness","Exercise","Workout"],
    user:"Rohit Gupta",
    joined:"12 June 2020"
}
];

router.get('/blogs/:category',(req,res)=>{
    const { category } = req.params;
    console.log(category)
    res.status(200).send(blogs.filter(value=>value.category===category).sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    }))
})

router.get('/latest',(req,res)=>{
    const latestarticles = blogs.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    }).slice(0,5);
    res.status(200).send(latestarticles)
})

router.get('/top',(req,res)=>{
    const sorteddetails = blogs.sort(function(a,b){
        return (b.likes) - (a.likes)
    });
    res.status(200).send(sorteddetails);
})

router.get('/gallery',(req,res)=>{
    res.send(blogs.filter(value=>value.id===5 || value.id===1 || value.id===4));
})

router.get('/:category/:id',(req,res) =>{
    const { category , id } = req.params;
    const blogpage = blogs.filter(value=>value.category===category && value.id===+id)
    res.send(blogpage)
})

module.exports = router;