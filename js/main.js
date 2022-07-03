var db = [
  {
    title:"첫번째 게시글",
    id:9999,
    date:"2020-10-24",
    user:"김현",
    view:3
  },
  {
    title:"두번째 게시글",
    id:10000,
    date:"2020-10-24",
    user:"김현",
    view:1
  },
  {
    title:"세번째 게시글",
    id:10001,
    date:"2020-10-25",
    user:"정도훈",
    view:2
  }
];

function View(view){

  return view + 1;
}

function SumView(length){
  let Lsumview = 0;

  for(let i =0; i<length; ++i)
  {
    Lsumview += db[i].view;
  }

  return Lsumview;
}

let Tsumview = document.createElement("div");
document.querySelector("body").appendChild(Tsumview);
Tsumview.innerHTML = `전체 게시글의 조회수 : ${SumView(db.length)}`;

function SelectSort(){
  for(let i = 0; i < db.length - 1; ++i){
    for(let j = i + 1; j < db.length; ++j){
      if(db[i].view > db[j].view){
        let temp = db[i];
        db[i] = db[j];
        db[j] = temp;
      }
    }
  }
}

let frame = document.createElement("div");
document.querySelector("body").appendChild(frame);

let ul = document.createElement("ul");
frame.appendChild(ul);

function Make(){

  SelectSort();

  ul.innerHTML = "";
  let i;
  for(i = 0; i < db.length; ++i){
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML =
      `<span class="id">${db[i].id}</span><span class="title" onclick='db[${i}].view=View(${db[i].view});Make();'>${db[i].title}</span><span class="user">${db[i].user}</span><span class="date">${db[i].date}</span><span class="view">${db[i].view}</span>`;
    Tsumview.innerHTML = `전체 게시글의 조회수 : ${SumView(db.length)}`;
  }
}

Make();

// 클릭해서 조회수가 갱신될 때마다 조회수별로 정렬 되게 만들기

/*function React(index){
    let li = document.querySelectorAll("ul li").item(index);

    SelectSort();

    li.innerHTML =
        `<span class="id">${db[index].id}</span><span class="title" onclick='db[${index}].view=View(${db[index].view});React(${index});'>${db[index].title}</span><span class="user">${db[index].user}</span><span class="date">${db[index].date}</span><span class="view">${db[index].view}</span>`;
    Tsumview.innerHTML = `전체 게시글의 조회수 : ${SumView(db.length)}`;
}*/ // 게시글 갱신
