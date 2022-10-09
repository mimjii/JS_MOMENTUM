const quotes=[
    {
        quote:"그래 맞아! 친구들의 우정이 있으면 내 고민도 날아갈 거야! ",
        author:"- 철수"
    },
    {
        quote:"정의의 반대말은 '악'이 아니고 또 다른 정의다 ",
        author:"- 짱구 아빠 신형만"
    },
    {
        quote:"어떤 힘든 일이 있어도 가족과 의지 할 수 있다면 극복할 수 있어 ",
        author:"- 짱구 아빠 신형만"
    },
    {
        quote:"뭐. 자기 힘만으로 컸다고 생각하는 사람은 그만큼 어른이 될 자격이 없는 거지만 말이지",
        author:" - 짱구 아빠 신형만"
    },
    {
        quote:"난 아빠랑 엄마 그리고 짱아랑 흰둥이랑 같이 있고 싶어. 싸우기도 하고 화가 나기도 해도, 같이 있는 게 좋으니까",
        author:" - 짱구"
    },
    {
        quote:"내 인생은 결코 하찮은 인생이 아니다. 가족이 주는 행복이 얼마나 큰지 너에게 알려주고 싶을 정도라고",
        author:" - 짱구 아빠 신형만"
    },
    {
        quote:"누굴 좋아하는 건 어쩔 수 없는 거예요",
        author:" - 짱구"
    },
    {
        quote:"엄마가 강한 사람은 약한 사람을 도와주는 거라고 말했잖아요. 하지만 서로가 서로를 도우면 더 좋을 것 같아서요",
        author:" - 짱구"
    },
    {
        quote:"계획대로 안되는 게 인생이다. 똑똑히 기억해둬라",
        author:" - 짱구 아빠 신형만"
    },
    {
        quote:"자기 자식에게 떨어져 죽으라는 부모가 어디 있어. 부모는 자식들에게 살아남으라고 말하는 거다!",
        author:" - 짱구 아빠 신형만"
    },
    {
        quote:"그래, 우린 머리도 나쁘고, 이해력도 부족해. 하지만, 1년 후의 일도 모르는데, 몇백 년 후의 일을 어떻게 알겠어?",
        author:" - 짱구 엄마 봉미선"
    },
    {
        quote:"아! 5살의 짱구야! 이 미래는 오직 너만의 거야! 네가 원하는 대로 살아! 그럼!",
        author:" - 짱구"
    },
    {
        quote:"너 똑똑히 들어 어른들 생활은 리얼한 소꿉놀이보다 훨씬 비참해! 내 말 절대 잊으면 안 돼!",
        author:" - 유리"
    },
    {
        quote:"누가 대신 일할 수는 있어도, 아버지를 대신할 수는 없어",
        author:" - 짱구 아빠 신형만"
    },
    {
        quote:"응, 나 크게 될게! 아까의 거대로봇보다 더! 더! 크게 될게!",
        author:" - 짱구"
    },
    {
        quote: "좋아서 미움받는 역할을 하는 게 아니야. 미움받아도 좋으니까 내 아이를 지키고 싶은 것뿐이야. 너희 같은 애들은 잘 모르겠지만, 그게 바로 엄마라는 존재인 거야",
        author:" - 짱구 엄마 봉미선"
    },
    {
        quote:"꿈은 도망가지 않아. 도망가는 것은 언제나 자신이야.",
        author:" - 짱구 아빠 신형만"
    },
    {
        quote:"꿈은 가능한 최대로 실현시키기 위해 음지에서 노력을 계속 하는 한 그 누구도 상처입히는 일이 없어.",
        author:" - 짱구 아빠 신형만"
    },
    {
        quote:"약한 자일수록 상대를 용서하지 못한다. 용서 한다는 것은 강하다는 증거이다.",
        author:" - 짱구 아빠 신형만"
    },

];

const quote=document.querySelector('#quote span:first-child');
const author=document.querySelector('#quote span:last-child');
const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText= todaysQuote.quote;
author.innerText= todaysQuote.author;

