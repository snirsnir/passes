const stories = [
    // Existing stories
    {
        text: "שמי שמשון ואני אוהב לשיר ונולדתי ב-22 בנובמבר.",
        password: "sing2211",
        imageUrl: "https://www.usatoday.com/gcdn/-mm-/52877fd99a3cb88bea2efa96ab56bc1450c11f17/c=1212-0-3957-2745/local/-/media/2015/11/09/USATODAY/USATODAY/635826980968417135-buster.jpg"
    },
    {
        text: "הבן זוג שלי נקרא דניאל והכרנו בהופעה של אלטון ג'ון",
        password: "daniielelton",
        imageUrl: "https://www.rollingstone.com/wp-content/uploads/2021/10/25A0603-Credit-Gregg-Kemp-1c.jpg?w=1581&h=1054&crop=1"
    },
    // New stories
    {
        text: "חגגתי את יום ההולדת ה-30 שלי במסעדה איטלקית עם כל החברים.",
        password: "italian30",
        imageUrl: "https://miro.medium.com/v2/resize:fit:640/0*rW9V5i3D8iQM9eaC.jpg"
    },
    {
        text: "יש לי שלושה ילדים, תומר שירה ויניב.",
        password: "tomershirayaniv",
        imageUrl: "https://i.dailymail.co.uk/i/pix/2013/05/06/article-2320235-0CD054C200000578-127_1024x615_large.jpg"
    },
    {
        text: "נולדתי בעיר הדרומית ביותר בארץ",
        password: "eilat",
        imageUrl: "https://www.frommers.com/system/media_items/attachments/000/869/684/s980/Eilat__Israel_Dan_Panorama.jpg?1666637822"
    },
    {
        text: "המאכל האהוב עליי הוא פיצה עם עגבניות.",
        password: "pizzatomato",
        imageUrl: "https://amindfullmom.com/wp-content/uploads/2021/03/Recipe-Tomato-Basil-Pizza.jpg"
    },
    {
        text: "סיפור האהבה האהוב עליי הוא רומיאו ויוליה.",
        password: "romeojuliet",
        imageUrl: "https://www.intofilm.org/intofilm-production/1319/scaledcropped/3000x1688/resources/1319/romeo-and-juliet.jpg"
    },
    {
        text: "בזמני הפנוי אני אוהב לצייר ולשחק בכדורסל .",
        password: "paintbasketball",
        imageUrl: "https://www.glassticwaterbottle.com/media/catalog/product/cache/4792edbe5578dbde92cabe03c5d66f78/s/t/sty-16-00002-1-1100.jpg"
    }
];

let currentStoryIndex = 0;

function updateStory() {
    document.getElementById('story').innerText = stories[currentStoryIndex].text;
    document.getElementById('passwordInput').value = "";
    document.getElementById('storyImage').src = stories[currentStoryIndex].imageUrl; // Update the image source
    document.getElementById('storyImage').alt = "Image for " + stories[currentStoryIndex].text; // Update the alt text
}

document.getElementById('submitBtn').addEventListener('click', function() {
    const input = document.getElementById('passwordInput').value;
    const feedback = document.getElementById('feedback');
    if(input === stories[currentStoryIndex].password) {
        feedback.innerText = "נכון! הנה הסיפור הבא.";
        feedback.style.color = "green";
        currentStoryIndex++;
        if(currentStoryIndex < stories.length) {
            updateStory();
        } else {
            document.getElementById('game').innerHTML = "<p>כל הכבוד!! ניחשתם את כל הסיסמאות והצלחתם במשימה!</p>";
        }
    } else {
        feedback.innerText = "סיסמא שגויה. נסה שוב.";
        feedback.style.color = "red";
    }
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('passwordInput');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = this.textContent === '👁️' ? '❌' : '👁️';
});

// Initialize the first story
updateStory();