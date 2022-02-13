(function () {
    const title = 'Kipsy';

    const author = 'The legend of Kipsy, the Hudson River Monster, as told by Alex.';

    const body = `In June, 1899, on the 14th page in a small, shared column of a dusty old copy of the New York Times that I paid $4 a month to access online I might add, a peculiar article by an unnamed journalist came out. It reported on a strange phenomenon. A sea creature was spotted off the coast of Weehawken, New Jersey, just across the Hudson River from midtown Manhattan. A number of people saw this creature, some noting that it was shaped like a shark, others swearing it was a serpent-like creature, all of whom reported that the creature had beelined for a bather “whose avoirdupois was above average” (apparently, this term was far more common back in the late 19th century). When the bather saw the dark mass nearing, he shrieked, turned toward the shore and swam for his life. The mass then promptly turned for a small boy swimming nearby and the boy narrowly escaped the beast by swimming to the shore as fast as he could.
    The only other descriptions of the monster came from eyewitness accounts on the day. They described the foam from the beast’s tale, its massive size, and the mysterious way by which it seemingly vanished as quickly as it arrived. The witnesses were numerous that day, and some even planned a hunting party, but they were never successful in finding the monster again.
    The stories of the Loch Ness monster of the New World spread quickly through the annals of local folklore, with a history dating back to the early 17th century, before the original article was published. Kipsy was the sweetheart of the Hudson Valley with folks pointing at shadows in the water ever since. It’s still quite common to hear of someone who’s caught a glimpse of the creature in the corner of their eye, and Kipsy tee-shirts are plentiful (come to think of it… I should get one myself),
    Despite the monster’s popularity in urban myth, it took one hundred and seven years for the name Kipsey to find its way back into the papers. Again, it was the New York Times with the story, and again it was a summer day in the Hudson River, this time in June. Reporter Jennifer Lee wrote the story, somewhat boringly referring to the beloved cryptid as a “manatee”. She noted its half-ton weight and its enormous stature. Of course, a manatee with a “pudgy-nosed face and a sweet-potato-shaped body” is much less dangerous sounding than an unnamed sea creature, but I still like the idea that those early swimmers in the Hudson River really saw something special, not just a severely lost sea elephant.
    `;

    const id = 'kipsy';

    const div = document.getElementById(id);
    div.innerHTML += `<h1>${title}</h1>`;
    div.innerHTML += `<p class='author'>${author}</p>`;
    div.innerHTML += body.split('\n').reduce(
        (acc, line) => `${acc}${line.trim() ? `<p class='story'>${line.trim()}</p>` : '<br>'}`,
        '',
    );
})();