<?php

$menu = array(
  array(
    'ajaxable' => 'true',
    'letter' => 'A',
    'name' => 'About',
    'url' => 'about/'
  ),
  array(
    'ajaxable' => 'true',
    'letter' => 'D',
    'name' => 'Design',
    'url' => 'design/'
  ),
  array(
    'ajaxable' => 'true',
    'letter' => 'W',
    'name' => 'Writing',
    'url' => 'writing/'
  ),
  array(
    'ajaxable' => 'false',
    'letter' => 'G',
    'name' => 'Github',
    'url' => 'https://github.com/jswest'
  ),
  array(
    'ajaxable' => 'false',
    'letter' => 'B',
    'name' => 'Blog',
    'url' => 'http://oberliner.net/blog'
  )
);

$about = array(
  'title' => 'About',
  'body' => 'John West is a freelance writer, designer, and musician. He spends his days as the interim CTO of <a href="threering.com">Three Ring</a>. He spends his nights writing. He spends his weekends practicing. You can reach him by email at john.sheffield.west[at]gmail.com. This site uses the Slim PHP framework on the back and Backbone.js on the front, and it uses open source fonts from The League of Moveable Type.'
);

$writing_menu = array(
  array(
    'slug' => 'texas-justice',
    'title' => 'Texas Justice',
    'blurb' => 'On September 21, 2011, thousands masked themselves with the face of a convicted cop killer and set the face of someone who once pistol-whipped a homeless man as their profile pictures. The words, "I am Troy Davis," were on all their lips. I am as guilty of it as anyone—those desperate acts of liminal solidarity. When Troy Davis died at the hands of his government for a crime he may not have committed, what else was there to do but speak the same shibboleth?',
    'url' => 'http://wildervoice.org/articles/texas-justice-2/'
  ),
  array(
    'slug' => 'anonymous',
    'title' => 'Anonymous',
    'blurb' => 'The Internet, if nothing else, has given us more than enough neologisms. Here\'s one: <em>cyber-utopian</em>. Here\'s another: <em>hacktivist</em>. Anonymous almost fits the bill on both counts. The group\'s roots trace back to the boards at 4chan.org—a popular site where users can upload images, chat, and produce memes whose shelf-lives are indeterminable (lolcats and rickrolling, for example, got their start on 4cahn). 4cahn\'s boards represent the Internet at its freest—and all the good and bad that comes with it: open exchange of ideas and a staggering amount of truly disturbing pornography.',
    'url' => 'http://wildervoice.org/articles/anonymous/'
  ),
  array(
    'slug' => 'tea-and-sympathy',
    'title' => 'Tea and Sympathy',
    'blurb' => 'No! ne’er was mingled such a draught<br>
    In palace, hall, or arbor,<br>
    As freemen brewed and tyrants quaffed<br>
    That night in Boston Harbor!<br>
    -Oliver Wendell Holmes, “A Ballad of the Boston Tea Party”.',
    'url' => 'http://oberliner.net/blog/?p=721'
  ),
  array(
    'slug' => 'the-newsies',
    'title' => 'The Newsies',
    'blurb' => 'It goes without saying that the <em>Review</em>, Oberlin College\'s paper of record, doesn\'t report on births and deaths and weddings and the weather--at least not that often. But you will find sports scores, a list of who is and who has come to talk, recitals and plays and general goings on about town. The <em>Review</em>, every week, is scrutable evidence of the existence of Oberlin. And, every week, the list of infractions in the Security Notebook is scrutable evidence of the existence of Oberlin\'s students.',
    'url' => 'http://blogs.oberlin.edu/community/life_culture/the_newsies.shtml'
    
  )
);

$design_menu = array(
  array(
    'slug' => 'three-ring',
    'name' => 'Three Ring',
    'images' => array(
      'assets/images/threering.png'
    ),
    'thumbnails' => array(
      'assets/images/threering.png'
    ),
    'blurb' => 'Three Ring, a web app that allows teachers to capture, organize, share, and assess student work online. Built on JRuby on Rails and Neo4j, I\'ve worked on practically every part of this app\'s stack.',
    'url' => 'http://threering.com'
  ),
  array(
    'slug' => 'wilder-voice',
    'name' => 'Wilder Voice',
    'images' => array(
      'assets/images/wv.png',
      'assets/images/wv1.png',
      'assets/images/wv2.png',
      'assets/images/wv3.png'
    ),
    'thumbnails' => array(
      'assets/images/wv_small.png',
      'assets/images/wv1.png',
      'assets/images/wv2.png',
      'assets/images/wv3.png'
    ),
    'url' => 'http://wildervoice.org',
    'blurb' => '<em>Wilder Voice</em> magazine is Oberlin College\'s magazine for long-form journalism and creative nonfiction. I led the team that designed and built this WordPress powered site.'
  ),
  array(
    'slug' => 'ibeo',
    'name' => 'Ich Bin Ein Oberliner',
    'images' => array(
      'assets/images/ibeo.png',
      'assets/images/ibeo_thumbnail1.png',
      'assets/images/ibeo_thumbnail2.png',
      'assets/images/ibeo_thumbnail3.png'
    ),
    'thumbnails' => array(
      'assets/images/ibeo_thumbnail.png',
      'assets/images/ibeo_thumbnail1.png',
      'assets/images/ibeo_thumbnail2.png',
      'assets/images/ibeo_thumbnail3.png'
    ),
    'url' => 'http://oberliner.net/oldblog',
    'blurb' => '<em>Ich Bin Ein Oberliner</em> was my old blog. I designed and built its custom WordPress theme.'
  ),
  array(
    'slug' => 'fc',
    'name' => 'Fontaine Capel',
    'images' => array(
      'assets/images/fc.png'
    ),
    'thumbnails' => array(
      'assets/images/fc_thumbnail.png'
    ),
    'url' => 'http://fontainecapel.com',
    'blurb' => 'I designed and hand-coded this PHP-backed artist\'s portfolio.'
  ),
  array(
    'slug' => 'bd',
    'name' => 'Becca Dewitt',
    'images' => array(
      'assets/images/bd.png'
    ),
    'thumbnails' => array(
      'assets/images/bd_thumbnail.png'
    ),
    'url' => null,
    'blurb' => 'I designed and hand-coded this PHP-backed artist\'s portfolio.'
  ),
  array(
    'slug' => 'rtc',
    'name' => 'RTC Studio',
    'images' => array(
      'assets/images/rtc.png'
    ),
    'thumbnails' => array(
      'assets/images/rtc_thumbnail.png'
    ),
    'url' => 'http://rtcstudio.com',
    'blurb' => 'I designed and hand-coded this PHP-backed site for the RTC Studio production company. They needed a website in a matter of hours, and I was able to create this for them.'
    
  ),
  array(
    'slug' => 'rtc-logo',
    'name' => 'RTC Studio Logo',
    'images' => array(
      'assets/images/rtc_logo.png'
    ),
    'thumbnails' => array(
      'assets/images/rtc_logo_thumbnail.png'
    ),
    'url' => null,
    'blurb' => 'These are a series of logo mockups for what would eventually be <a href="#design/rtc">RTC Studio</a>.'
  ),
  array(
    'slug' => 'tanwir',
    'name' => 'Tanwir',
    'images' => array(
      'assets/images/tanwir_front_page.png',
      'assets/images/tanwir_bob_drogon.png',
      'assets/images/tanwir_circle.png',
      'assets/images/tanwir_tank.png'
    ),
    'thumbnails' => array(
      'assets/images/tanwir_thumbnail.png',
      'assets/images/tanwir_bob_drogon.png',
      'assets/images/tanwir_circle.png',
      'assets/images/tanwir_tank.png'
    ),
    'url' => null,
    'blurb' => 'I designed and built this WordPress-powered site for a Middle Eastern studies organization.'
  ),
  array(
    'slug' => 'org',
    'name' => 'Oberlin Research Group',
    'images' => array(
      'assets/images/org.png',
      'assets/images/org_thumb1.png',
      'assets/images/org_thumb2.png',
      'assets/images/org_thumb3.png'
    ),
    'thumbnails' => array(
      'assets/images/org.png',
      'assets/images/org_thumb1.png',
      'assets/images/org_thumb2.png',
      'assets/images/org_thumb3.png'
    ),
    'url' => null,
    'blurb' => 'I designed and built the front-end of this WordPress-powered site for the Oberlin Research Group.'
  ),
  array(
    'slug' => 'okp',
    'name' => 'Okapi Productions',
    'images' => array(
      'assets/images/okp.png'
    ),
    'thumbnails' => array(
      'assets/images/okp_thumbnail.png'
    ),
    'url' => 'http://www.okapiproductions.com/',
    'blurb' => 'I designed and built this WordPress-powered site for Okapi Productions, a documentary film company.'
  ),
  array(
    'slug' => 'ov',
    'name' => 'Oberlin Video Portal',
    'images' => array(
      'assets/images/ov.png'
    ),
    'thumbnails' => array(
      'assets/images/ov_thumbnail.png'
    ),
    'url' => null,
    'blurb' => 'I built the front-end of this Rails-powered site, which pulls Oberlin College\'s YouTube videos into a centralized location. I was one of a two-person team on this project.'
  ),
  array(
    'slug' => 'sf',
    'name' => 'StudentFrame',
    'images' => array(
      'assets/images/sf.png'
    ),
    'thumbnails' => array(
      'assets/images/sf_thumbnail.png'
    ),
    'url' => 'http://studentframetest.herokuapp.com/',
    'blurb' => 'I built the front-end—and much of the back-end—of this Rails-powered site and custom CMS, which is for a national college news site.'
  ),
  array(
    'slug' => 'oil',
    'name' => 'Oil',
    'images' => array(
      'assets/images/oil.jpg'
    ),
    'thumbnails' => array(
      'assets/images/oil_thumbnail.jpg'
    ),
    'url' => null,
    'blurb' => 'This is an advertising poster for a lecture series on oil in the Middle East.'
  ),
  array(
    'slug' => 'tahrir',
    'name' => 'Revolutions',
    'images' => array(
      'assets/images/tahrir.png'
    ),
    'thumbnails' => array(
      'assets/images/tahrir_thumbnail.png'
    ),
    'url' => null,
    'blurb' => 'These are a series of advertising posts for a lecture series on the revolutions in the Middle East'
  ),
  array(
    'slug' => 'old-vanity',
    'name' => 'Old Portfolio Site',
    'images' => array(
      'assets/images/old_vanity.png'
    ),
    'thumbnails' => array(
      'assets/images/old_vanity_thumbnail.png'
    ),
    'url' => null,
    'blurb' => 'This is my old portfolio site. It was built with a custom PHP CMS.'
  ),
  array(
    'slug' => 'vanity',
    'name' => 'This Site',
    'images' => array(
      'assets/images/vanity.png'
    ),
    'thumbnails' => array(
      'assets/images/vanity_thumbnail.png'
    ),
    'url' => null,
    'blurb' => 'This is <em>this</em> site. It\'s built on top of the Slim PHP framework and uses Backbone.js on the front end.'
  )
);

