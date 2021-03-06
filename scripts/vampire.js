(function () {
    const title = 'A Very Ugly Vampire In The Bowery';

    const author = 'The urban legend of Ludwig, the first vampire in America, as told by Alex.';

    const body = `Standing no more than three feet tall with matted, greasy black hair covering every inch of his rotund, unsightly figure, Ludwig the Bloodsucker was a homely dude. Most of the descriptions of this character focus on the fact that he might as well have been a stronger Danny Devito with less money on the streets of 19th century New York City. His hair was bristly and unkempt, he had small bushes growing out of his nose and ears, and, and I cannot stress this enough, he was a very small man. That said, the guy could pick up any man he wanted to with his surprising strength. Though, sadly, his… composition prevented him from doing the same with the ladies. Unfortunately, that meant that he was unable to use his charm or beauty to seduce the lovely ladies like his Romanian counterpart Dracula would have, but a man’s gotta eat, right? That’s how Ludwig found himself on a crappy little boat to the horrible, disgusting, putrid place called the Bowery (funny that a place like that now rents studios at like $3,500 a month, huh?).
    Now, Ludwig wasn't a cruel dude or anything. He didn’t kill anybody and he certainly wasn’t an angry fellow. He was more of… a connoisseur if you will. I feel like I ought to tell you right now that Ludwig the tailor did exist. There’s an article from the National Police Gazette on one Franz Ludwig Hellreigel that I read, and we all know that no news source could possibly lie, right? He just had a bit of a bad rap because… well… you know… he drank human blood and all.
    The story goes that ole’ Ludwig would skulk around the grimy alleys of the Bowery, hanging out at the seedy joints like Bismarck Hall or the House of Commons (apparently bars were named like old British government buildings back then) where the *shudders* lower classes drank. He would wait for some guy off his shift at the, I don’t know, coal smoke factory or something, to have one too many and start to pick a fight with another guy twice his size. Of course, after a solid pounding the poor guy would be thrown out on the street, sent home with his face beaten to a pulp, and that’s when Ludwig would start his… process.
    Ludwig grew up in Germany in the early to mid 1800’s, think like the depression with lederhosen. He didn’t eat well, nobody did. His diet was like… corn and beer. They didn’t have meat back then, that would mean you would have to have a bunch of sheep or cows or pigs or something, and in this economy? Forget about it! So, it wasn’t uncommon to buy what you could at the market, which, oftentimes, was blood. Yup, I think you could make something like a stew or something, maybe some weird sausage, the point is, our boy Ludwig didn’t do any of that, he just drank it straight. Like a psychopath. And liked it. Like a psychopath. So that’s where he came to start enjoying the taste of blood.
    Now back to the Bowery. Ludwig would catch these drunken schmucks as they were flung out the door. He would watch them wriggle and squirm and curse at him. It was all very amusing. Then he would take about a pint of their blood and send them home a little gray and pretty embarrassed that a 3-foot German sasquatch just stole a stein of their blood. He would then decant the blood into a glass and enjoy it cheerfully like a fine merlot, sniffing the bouquet and enjoying the warmth that the alcohol content of the blood offered on the cold city nights.
    So that’s the story of Ludwig. Not a terrible guy, just a peculiarly short, stout, ugly weirdo who enjoyed drinking mildly alcoholic blood.`;

    const id = 'vampire';

    const div = document.getElementById(id);
    div.innerHTML += `<h1>${title}</h1>`;
    div.innerHTML += `<p class='author'>${author}</p>`;
    div.innerHTML += body.split('\n').reduce(
        (acc, line) => `${acc}${line.trim() ? `<p class='story'>${line.trim()}</p>` : '<br>'}`,
        '',
    );
})();