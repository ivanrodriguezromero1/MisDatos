var paneles = document.querySelector('.paneles');
var panels = paneles.querySelectorAll('.panel');
var panelCount = panels.length;
var selectedIndex = 0;
var panelWidth = paneles.offsetWidth;
var panelHeight = paneles.offsetHeight;
var radius, theta;
var phone = window.matchMedia('(max-width:480px)').matches;
(()=>{
    let imgs = [
        'Html.svg',
        'Css.svg',
        'Javascript.svg',
        'Three.svg',
        'Angular.svg',
        'Vue.svg',
        'Node.svg',
        'Socketio.svg',
        'Cgrilla.svg',
        'Asp.png',
        'Sqlserver.svg',
        'Oracle.svg',
        'Azure.svg',
        'Python.svg',
        'Java.svg',
        'VB.png',
        'Git.svg',
        'Bitbucket.svg',
        'Scrum.svg',
        'Flutter.svg',
        'Android.svg',
        'Unity.svg',
        'Photoshop.svg',
        'Solidworks.png',
        'Labview.svg'
    ];
    let grid = document.querySelectorAll('.grid-item');
    for(let i=0;i<grid.length;i++){
        grid[i].style.background= "url('/Resume/Assets/imgs/logo"+imgs[i]+"') no-repeat";
        grid[i].style.backgroundSize=phone?"40px":"80px";
    }
})();

function addIcons(){
    let iconNames = [
        'Kiev.png',
        'Zytrust.png',
        'Ctic.png',
        'Ito.png',
        'Ruway.png',
        'Electrodunas.png',
        'Fenix.png',
        'Fondecyt.png',
        'Kamayuc.png',
        'Aerospace.png',
        'Uni1.png',
        'Uni2.png',
        'Infouni.png',
        'Training.svg',
        'Job.svg',
        'Mail.svg',
        'Mail.svg',
        'Call.svg',
        'Science.svg',
        'Mail.svg',
        'Mail.svg',
        'Call.svg'
    ];
    let arrayButtonI = [
        'ContactsBlack.svg',
        'BusinessBlack.svg',
        'ScienceBlack.svg',
        'SchoolBlack.svg',
        'GroupsBlack.svg',
        'LinkBlack.svg'
    ];
    let arrayH2I = [
        'Contacts.svg',
        'Business.svg',
        'Science.svg',
        'School.svg',
        'Groups.svg',
        'Link.svg'
    ];
    let size1=phone?"15px":"30px";
    let size2=phone?"12px":"16px";
    let size3=phone?"18px":"35px";
    StyleIcon(iconNames,'h3>i,address>i,p>i',size1);
    StyleIcon(arrayButtonI,'button>i',size2);
    StyleIcon(arrayH2I,'h2>i',size3);
}
function StyleIcon(array,etiqueta,size){
    let query = document.querySelectorAll(etiqueta);
    for(let i = 0; i<query.length; i++){
        query[i].style.background = "url('/Resume/Assets/imgs/logo" + array[i] + "') no-repeat";
        query[i].style.backgroundSize=size;
    }
}
addIcons();
function rotatePaneles() 
{
    let angle = theta * selectedIndex * -1;
    let transform = 'translateZ('+-radius+'px) rotateX('+-4+'deg) rotateY('+angle+'deg)';
    paneles.style.transform = transform;
}
var buttonMenu = document.querySelectorAll('.buttonMenu');
for(let i=0;i<buttonMenu.length;i++){
    buttonMenu[i].addEventListener('click',function(){
        selectedIndex=i;
        rotatePaneles();
    });
}
var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotatePaneles();
});
var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotatePaneles();
});

function creationPaneles() {
  theta = 360 / panelCount;
  radius = Math.round( ( panelWidth / 2) / Math.tan( Math.PI / panelCount ) );
  for ( var i=0; i < panels.length; i++ ) {
    var panel = panels[i];
    if ( i < panelCount ) {
        panel.style.background ='var(--colorTitulos)';
        panel.style.opacity = 1;
        var panelAngle = theta * i;
        panel.style.transform = 'rotateY(' + panelAngle + 'deg) translateZ(' + radius + 'px)';
    }
  }
  rotatePaneles();
}
creationPaneles();

