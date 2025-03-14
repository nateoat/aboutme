const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

const toggle = document.querySelector(".toggle");

let selected = card2;

console.log(card2 === selected);

card1.addEventListener("click", () => {
    selected.classList.toggle("selected");

    card1.classList.toggle("selected");
    selected = card1;
});

card2.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card2.classList.toggle("selected");
    selected = card2;
});

card3.addEventListener("click", () => {
    selected.classList.toggle("selected");
    card3.classList.toggle("selected");
    selected = card3;
});

toggle.addEventListener("click", () => {
    toggle.classList.toggle("latte");

    if (toggle.classList.contains("latte")) {
        card1.innerHTML = `
            <h3>Latte Lover Fact 1 </h3>
                <p>
            The iced latte is a New York staple perfect for fueling early-morning commutes 
            and late-night brainstorming sessions in cozy cafés. 
        </p>
        <ul>
            <li>NYC has over <strong>3,000 coffee shops</strong>, making it one of the biggest coffee hubs in the U.S.</li>
            <li>The classic iced latte is made with espresso, milk, and ice but oat milk has taken over NYC as the #1 dairy alternative.</li>
            <li>Many iconic NYC cafés, like Blue Bottle and La Colombe helped popularize specialty iced lattes.</li>
        </ul>
        `;
        card2.innerHTML = `
            <h3>Latte Lover Fact 2 </h3>
                <p>
            In New York, an iced latte isn't just a drink—it's an accessory 
            Whether you're power-walking through SoHo or journaling in a Brooklyn café, 
            a perfectly crafted iced latte is a must-have.
        </p>
        <ul>
            <li>The phrase "iced latte season is a year-round joke because New Yorkers will drink one even in freezing temperatures.</li>
            <br>
            <li>Matcha and chai lattes are trending, but the classic vanilla oat milk iced latte remains NYC’s go-to order.</li>        </ul>
        `;

        card3.innerHTML = `
        <h3>Latte Lover Fact 3 </h3>
            <p>
            The NYC iced latte scene thrives on customization—from alternative milks to unique flavor shots, 
            every drink is a reflection of its owners personality.
        </p>
        <ul>
            <li>Popular add-ins include lavender, honey, and brown sugar syrup, giving lattes a chic, modern twist.</li>
            <li>Some NYC cafés offer cold brew shots instead of espresso, creating a smoother and less acidic iced latte.</li>
            <li>Love an Instagram-worthy moment? Many cafés serve aesthetic iced lattes in glass cups with oversized ice cubes for a sleek look.</li>
        </ul>
    `;
    }

    if (!toggle.classList.contains("latte")) {
        card1.innerHTML = `
            <h3>Matcha Lover Fact 1</h3>
                <p>
                    Matcha is made from shade-grown green tea leaves, which are ground into a fine powder. 
                    The shading process boosts chlorophyll production, giving matcha its vibrant green color!
                </p>
                <ul>
                    <li>Matcha has <strong>137 times</strong> more antioxidants than regular green tea.</li>
                    <li>Samurai warriors drank matcha before battle for energy and focus.</li>
                    <li>The highest-quality matcha comes from <strong>Uji, Japan</strong>, a region famous for its tea cultivation.</li>
                </ul>
        `;
        card2.innerHTML = `
            <h3>Matcha Lover Fact 2</h3>
                <p>
                    Matcha has been a part of Japanese culture for over <strong>800 years</strong> and was introduced by 
                    Buddhist monks who used it to stay alert during meditation.
                </p>
                <ul>
                    <li>The traditional way to prepare matcha involves a <strong>bamboo whisk</strong> called a <em>chasen</em>.</li>
                    <li>Matcha contains <strong>L-theanine</strong>, an amino acid that promotes relaxation without drowsiness.</li>
                    <li>Drinking matcha provides a slow-releasing caffeine boost without the jitters of coffee.</li>
                </ul>
        `;

        card3.innerHTML = `
       <h3>Matcha Lover Fact 3</h3>
                <p>
                    Unlike regular green tea, where leaves are steeped and discarded, matcha allows you to consume 
                    the entire tea leaf, maximizing its health benefits.
                </p>
                <ul>
                    <li>Matcha supports metabolism and can aid in weight management.</li>
                    <li>It has been linked to improved brain function and memory retention.</li>
                    <li>High-quality matcha has a naturally sweet and umami-rich taste.</li>
                </ul>
    `;
    }
});