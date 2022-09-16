
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
// template:`<div>
// <h1> welcome to mean stack app</h1>
 //<p> this is app from demo course</p>
 //</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'Mean app';  
   isdisable:boolean=false;
   print():void{
    console.log('button pressed')
    
   }
   fristName:String='';
   toggledata( moviId:string):void{
     // this.singleMovi.isvisiable=!this.singleMovi.isvisiable;
     this.movies.filter(function(movi){
      if(movi.id==moviId){
        movi.isvisiable=!movi.isvisiable
      }
     })

   }
  // singleMovi :any={
    
    //  "poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
     // "release_date":"2022-06-29",
     // "title":"Minions: The Rise of Gru",
      //"video":false,
     // "vote_average":7.7,
    //  "vote_count":1886,
      //isvisiable:false
   
   
 //  }
   movies :any[]=[
    {
     
      
         "adult":false,
         "backdrop_path":"/2RSirqZG949GuRwN38MYCIGG4Od.jpg",
         "genre_ids":[
            53
         ],
         "id":985939,
         "original_language":"en",
         "original_title":"Fall",
         "overview":"For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights Server : https://divedigital.vip/movie/985939/fall",
         "popularity":7850.038,
         "poster_path":"/v28T5F1IygM8vXWZIycfNEm3xcL.jpg",
         "release_date":"2022-08-11",
         "title":"Fall",
         "video":false,
         "vote_average":7.4,
         "vote_count":548,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/1n7ZGr6WeDOW4rFiQKmFel8baWH.jpg",
         "genre_ids":[
            53,
            27
         ],
         "id":760741,
         "original_language":"en",
         "original_title":"Beast",
         "overview":"A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.Server : https://divedigital.vip/movie/760741/beast",
         "popularity":5056.663,
         "poster_path":"/iRV0IB5xQeOymuGGUBarTecQVAl.jpg",
         "release_date":"2022-08-11",
         "title":"Beast",
         "video":false,
         "vote_average":7.1,
         "vote_count":275,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
         "genre_ids":[
            16,
            878,
            28
         ],
         "id":610150,
         "original_language":"ja",
         "original_title":"ドラゴンボール超 スーパーヒーロー",
         "overview":"The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
         "popularity":3762.862,
         "poster_path":"/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
         "release_date":"2022-06-11",
         "title":"Dragon Ball Super: Super Hero",
         "video":false,
         "vote_average":8,
         "vote_count":1557,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/i0Y0wP8H6SRgjr6QmuwbtQbS24D.jpg",
         "genre_ids":[
            28,
            18,
            36
         ],
         "id":579974,
         "original_language":"te",
         "original_title":"రౌద్రం రణం రుధిరం",
         "overview":"A fictional history of two legendary revolutionaries' journey away from home before they began fighting for their country in the 1920s.",
         "popularity":3684.786,
         "poster_path":"/wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg",
         "release_date":"2022-03-24",
         "title":"RRR",
         "video":false,
         "vote_average":7.9,
         "vote_count":330,
         isvisiable:false

      },
      {
         "adult":false,
         "backdrop_path":"/lv4mA4jOnRSQCkmDYUyZ8ON43Dc.jpg",
         "genre_ids":[
            14,
            12,
            10751
         ],
         "id":532639,
         "original_language":"en",
         "original_title":"Pinocchio",
         "overview":"A wooden puppet embarks on a thrilling adventure to become a real boy.",
         "popularity":3680.307,
         "poster_path":"/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg",
         "release_date":"2022-09-07",
         "title":"Pinocchio",
         "video":false,
         "vote_average":6.8,
         "vote_count":407,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
         "genre_ids":[
            14,
            28,
            35
         ],
         "id":616037,
         "original_language":"en",
         "original_title":"Thor: Love and Thunder",
         "overview":"After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
         "popularity":3643.289,
         "poster_path":"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
         "release_date":"2022-07-06",
         "title":"Thor: Love and Thunder",
         "video":false,
         "vote_average":6.8,
         "vote_count":3224,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg",
         "genre_ids":[
            28,
            18,
            878
         ],
         "id":629176,
         "original_language":"en",
         "original_title":"Samaritan",
         "overview":"Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.",
         "popularity":3370.063,
         "poster_path":"/vwq5iboxYoaSpOmEQrhq9tHicq7.jpg",
         "release_date":"2022-08-25",
         "title":"Samaritan",
         "video":false,
         "vote_average":7,
         "vote_count":947,
         isvisiable:false

      },
      {
         "adult":false,
         "backdrop_path":"/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
         "genre_ids":[
            53,
            28,
            878
         ],
         "id":766507,
         "original_language":"en",
         "original_title":"Prey",
         "overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
         "popularity":2390.388,
         "poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
         "release_date":"2022-08-02",
         "title":"Prey",
         "video":false,
         "vote_average":8,
         "vote_count":3794,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/skL7c4ZhZqo1IFbMcHNrol4fvkc.jpg",
         "genre_ids":[
            28,
            80,
            53
         ],
         "id":921360,
         "original_language":"en",
         "original_title":"Wire Room",
         "overview":"New recruit Justin Rosa must monitor arms-smuggling cartel member Eddie Flynn — and keep him alive at all costs. When a SWAT team descends on Flynn’s home, Rosa breaks protocol and contacts the gangster directly to save his life. As gunmen break into the Wire Room and chaos erupts, Mueller and Rosa make a final, desperate stand against the corrupt agents and officials who seek to destroy evidence and kill them both.",
         "popularity":2266.31,
         "poster_path":"/b9ykj4v8ykjRoGB7SpI1OuxblNU.jpg",
         "release_date":"2022-09-02",
         "title":"Wire Room",
         "video":false,
         "vote_average":7.3,
         "vote_count":46,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/rHzoz94bRfyfNLjiIB26Wt5KDHE.jpg",
         "genre_ids":[
            28,
            80,
            35,
            12
         ],
         "id":773867,
         "original_language":"ko",
         "original_title":"서울대작전",
         "overview":"Chasing speed, dreams and money, a team of drivers get involved in the slush fund investigation of a powerful figure during the 1988 Seoul Olympics.",
         "popularity":2035.093,
         "poster_path":"/ffX0TL3uKerLXACkuZGWhAPMbAq.jpg",
         "release_date":"2022-08-26",
         "title":"Seoul Vibe",
         "video":false,
         "vote_average":6.9,
         "vote_count":67,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/qaTzVAW1u16WFNsepjCrilBuInc.jpg",
         "genre_ids":[
            16,
            28,
            10751,
            878,
            35
         ],
         "id":539681,
         "original_language":"en",
         "original_title":"DC League of Super-Pets",
         "overview":"When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.",
         "popularity":1861.492,
         "poster_path":"/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
         "release_date":"2022-07-27",
         "title":"DC League of Super-Pets",
         "video":false,
         "vote_average":7.6,
         "vote_count":515,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/3PieOs1t6dPHWlgvX3XoqTIQLqN.jpg",
         "genre_ids":[
            12,
            28,
            878
         ],
         "id":507086,
         "original_language":"en",
         "original_title":"Jurassic World Dominion",
         "overview":"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
         "popularity":1753.842,
         "poster_path":"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
         "release_date":"2022-06-01",
         "title":"Jurassic World Dominion",
         "video":false,
         "vote_average":7.1,
         "vote_count":3315,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
         "genre_ids":[
            28,
            18
         ],
         "id":361743,
         "original_language":"en",
         "original_title":"Top Gun: Maverick",
         "overview":"After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
         "popularity":1734.241,
         "poster_path":"/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
         "release_date":"2022-05-24",
         "title":"Top Gun: Maverick",
         "video":false,
         "vote_average":8.4,
         "vote_count":3678,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
         "genre_ids":[
            16,
            12,
            35,
            14
         ],
         "id":438148,
         "original_language":"en",
         "original_title":"Minions: The Rise of Gru",
         "overview":"A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
         "popularity":1643.145,
         "poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
         "release_date":"2022-06-29",
         "title":"Minions: The Rise of Gru",
         "video":false,
         "vote_average":7.6,
         "vote_count":1909,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/t9K8ycUBCplWiICDOKRNRYcEH9e.jpg",
         "genre_ids":[
            16,
            28,
            14
         ],
         "id":810693,
         "original_language":"ja",
         "original_title":"劇場版 呪術廻戦 0",
         "overview":"Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
         "popularity":1608.557,
         "poster_path":"/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg",
         "release_date":"2021-12-24",
         "title":"Jujutsu Kaisen 0",
         "video":false,
         "vote_average":7.7,
         "vote_count":274,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/fX3tu1w7iZJVP91bNvocmisOfWD.jpg",
         "genre_ids":[
            35,
            28
         ],
         "id":838197,
         "original_language":"it",
         "original_title":"Altrimenti ci arrabbiamo",
         "overview":"Carezza and Sorriso, brothers very different from each other and in quarrel since childhood, will have to put aside their controversies to recover the legendary Dune Buggy, once belonged to their beloved father and now stolen from him by Torsillo, an unscrupulous building speculator, and his son Raniero. In doing so, they will forge an unusual alliance with a circus community, headed by the beautiful and dangerous Miriam and threatened by Torsillo's dirty business. Between daring chases, memorable fights and delicate meals based on beer and sausages, will the two brothers be able to find their beloved car?",
         "popularity":1604.42,
         "poster_path":"/qlrRi05x5hjoM29hz6TDLGTUSop.jpg",
         "release_date":"2022-03-23",
         "title":"Watch Out, We're Mad",
         "video":false,
         "vote_average":5,
         "vote_count":65,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/pkLegAR3G5T63B2Xz2ijbD1BAm8.jpg",
         "genre_ids":[
            27,
            53,
            28,
            12,
            80,
            9648,
            18,
            10752
         ],
         "id":927341,
         "original_language":"en",
         "original_title":"Hunting Ava Bravo",
         "overview":"Billionaire sportsman Buddy King unwinds by hunting human captives on his remote mountain estate. But his latest victim, Ava Bravo is no easy target.",
         "popularity":1316.337,
         "poster_path":"/etc6HKBEhNySNnYU2nRgbSeIyoW.jpg",
         "release_date":"2022-04-01",
         "title":"Hunting Ava Bravo",
         "video":false,
         "vote_average":6.6,
         "vote_count":53,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/eiBMu2noc6r1QZLfQlFhfVtbXeM.jpg",
         "genre_ids":[
            28,
            53,
            9648
         ],
         "id":997120,
         "original_language":"en",
         "original_title":"Sniper: Rogue Mission",
         "overview":"When a crooked federal agent is involved in a human sex trafficking ring, Sniper and CIA Rookie Brandon Beckett goes rogue, teaming up with his former allies Homeland Security Agent Zero and assassin Lady Death to uncover the corrupt agent and take down the criminal organization.",
         "popularity":1266.858,
         "poster_path":"/jSL5TqroJsDAIgBdELBwby1uhf1.jpg",
         "release_date":"2022-08-15",
         "title":"Sniper: Rogue Mission",
         "video":false,
         "vote_average":6.9,
         "vote_count":57,
         isvisiable:false
      },
      {
         "adult":false,
         "backdrop_path":"/xVbppM1xgbskOKgOuV8fbWBWHtt.jpg",
         "genre_ids":[
            27,
            9648,
            878,
            53
         ],
         "id":762504,
         "original_language":"en",
         "original_title":"Nope",
         "overview":"Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
         "popularity":1261.531,
         "poster_path":"/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
         "release_date":"2022-07-20",
         "title":"Nope",
         "video":false,
         "vote_average":7,
         "vote_count":1406,
         isvisiable:false
      }
    ]

 
     }
