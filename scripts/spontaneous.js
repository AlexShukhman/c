(function () {
    const title = 'Spontaneous Me';

    const author = 'by Walt Whitman';

    const body = `Spontaneous me, Nature,   
    The loving day, the mounting sun, the friend I am happy with,   
    The arm of my friend hanging idly over my shoulder,   
    The hill-side whiten’d with blossoms of the mountain ash,   
    The same late in autumn, the hues of red, yellow, drab, purple, and light and dark green,
    The rich coverlet of the grass, animals and birds, the private untrimm’d bank, the primitive apples, the pebble-stones,  
    Beautiful dripping fragments, the negligent list of one after another, as I happen to call them to me or think of them,  
    The real poems, (what we call poems being merely pictures,)   
    The poems of the privacy of the night, and of men like me,   
    This poem drooping shy and unseen that I always carry, and that all men carry,
    (Know once for all, avow’d on purpose, wherever are men like me, are our lusty lurking masculine poems,)   
    Love-thoughts, love-juice, love-odor, love-yielding, love-climbers, and the climbing sap,   
    Arms and hands of love, lips of love, phallic thumb of love, breasts of love, bellies press’d and glued together with love,   
    Earth of chaste love, life that is only life after love,   
    The body of my love, the body of the woman I love, the body of the man, the body of the earth,
    Soft forenoon airs that blow from the south-west,   
    The hairy wild-bee that murmurs and hankers up and down, that gripes the full-grown lady-flower, curves upon her with amorous firm legs, takes his will of her, and holds himself tremulous and tight till he is satisfied,   
    The wet of woods through the early hours,   
    Two sleepers at night lying close together as they sleep, one with an arm slanting down across and below the waist of the other,   
    The smell of apples, aromas from crush’d sage-plant, mint, birch-bark,
    The boy’s longings, the glow and pressure as he confides to me what he was dreaming,  
    The dead leaf whirling its spiral whirl, and falling still and content to the ground,  
    The no-form’d stings that sights, people, objects, sting me with,   
    The hubb’d sting of myself, stinging me as much as it ever can any one,   
    The sensitive, orbic, underlapp’d brothers, that only privileged feelers may be intimate where they are,
    The curious roamer, the hand roaming all over the body, the bashful withdrawing of flesh where the fingers soothingly pause and edge themselves,  
    The limpid liquid within the young man,   
    The vexed corrosion so pensive and so painful,   
    The torment, the irritable tide that will not be at rest,   
    The like of the same I feel, the like of the same in others,
    The young man that flushes and flushes, and the young woman that flushes and flushes,  
    The young man that wakes deep at night, the hot hand seeking to repress what would master him, The mystic amorous night, the strange half-welcome pangs, visions, sweats,   
    The pulse pounding through palms and trembling encircling fingers, the young man all color’d,red, ashamed, angry;  
    The souse upon me of my lover the sea, as I lie willing and naked,
    The merriment of the twin babes that crawl over the grass in the sun, the mother never turning her vigilant eyes from them,   
    The walnut-trunk, the walnut-husks, and the ripening or ripen’d long-round walnuts,    
    The continence of vegetables, birds, animals,   
    The consequent meanness of me should I skulk or find myself indecent, while birds and animals never once skulk or find themselves indecent,  
    The great chastity of paternity, to match the great chastity of maternity,
    The oath of procreation I have sworn, my Adamic and fresh daughters,   
    The greed that eats me day and night with hungry gnaw, till I saturate what shall produce boys to fill my place when I am through,  
    The wholesome relief, repose, content,    
    And this bunch pluck’d at random from myself,   
    It has done its work—I tossed it carelessly to fall where it may.`;

    const id = 'spontaneous';

    const div = document.getElementById(id);
    div.innerHTML += `<h1>${title}</h1>`;
    div.innerHTML += `<p class='author'>${author}</p>`;
    div.innerHTML += body.split('\n').reduce(
        (acc, line) => `${acc}${line.trim() ? `<p class='poem'>${line.trim()}</p>` : '<br>'}`,
        '',
    );
})();