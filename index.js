(()=>{
    const {log} = console;
    const h2m = (hrs, min)=>hrs*60+min;
    const m2h = (m)=>{
        if(m==undefined) return "";
        return `${Math.floor(Number(m/60)).toFixed(0)}:${m%60}`};
    const _t = [h2m(10,50),h2m(11,40),h2m(12,30),h2m(13,20),h2m(14,00),h2m(14,50),h2m(15,00)]
    const _s = {
        0:{subject:"DM",teacher:"Mrs. Parul Dhingra"},
        1:{subject:"DAA",teacher:"Mrs. Nidhi Sharma"},
        2:{subject:"OS",teacher:"Mrs. Tanu Dua"},
        3:{subject:"OB",teacher:"Mrs. Sneha Sharma"},
        4:{subject:"PRJ",teacher:"Mr. Kaushal Shakya"},
        5:{subject:"COA",teacher:"Mr. Ashok Madaan"},
        6:{subject:"EVS",teacher:"Mrs. Kausar Fatima"},
        7:{subject:"Break",teacher:""},
        8:{subject:"Nothing", teacher:""}
    }
    const _d = ()=>{
        const _a = new Date();
        return {day:_a.getDay(),min:_a.getMinutes(), hrs:_a.getHours(), sec:_a.getSeconds()}
    }

    const _get = (obj)=>{
        let _1 = _d();
        // let _1 = {day:2, min:47, hrs:12, sec:12}
        let _2 = obj[_1.day];
        let _3 = h2m(_1.hrs, _1.min);
        let _4;
        _2.forEach((e,i) => {
            if(e.at[0]<=_3&&e.at[1]>=_3){
                _4 = i;
                // return e;
            }
        });

        return _2[_4];
    }

    
    
    // 
    const _4TT = {
        1:[
            {at:[_t[0], _t[1]],is:_s[0]},
            {at:[_t[1], _t[2]],is:_s[1]},
            {at:[_t[2], _t[3]],is:_s[2]},
       {at:[_t[3], _t[4]],is:_s[7]},
       {at:[_t[4], _t[5]],is:_s[3]},
       {at:[_t[5], _t[6]],is:_s[4]}
    ],
    
    2:[
        {at:[_t[0], _t[1]],is:_s[5]},
        {at:[_t[1], _t[2]],is:_s[1]},
        {at:[_t[2], _t[3]],is:_s[2]},
        {at:[_t[3], _t[4]],is:_s[7]},
        {at:[_t[4], _t[5]],is:_s[3]},
        {at:[_t[5], _t[6]],is:_s[8]}
    ],
    
    3:[
        {at:[_t[0], _t[1]],is:_s[6]},
        {at:[_t[1], _t[2]],is:_s[5]},
        {at:[_t[2], _t[3]],is:_s[3]},
        {at:[_t[3], _t[4]],is:_s[7]},
        {at:[_t[4], _t[5]],is:_s[1]},
        {at:[_t[5], _t[6]],is:_s[8]}
    ],
    
    4:[
        {at:[_t[0], _t[1]],is:_s[2]},
        {at:[_t[1], _t[2]],is:_s[5]},
        {at:[_t[2], _t[3]],is:_s[0]},
        {at:[_t[3], _t[4]],is:_s[7]},
        {at:[_t[4], _t[5]],is:_s[1]},
        {at:[_t[5], _t[6]],is:_s[8]}
    ],
    
    4:[
        {at:[_t[0], _t[1]],is:_s[3]},
        {at:[_t[1], _t[2]],is:_s[0]},
        {at:[_t[2], _t[3]],is:_s[6]},
        {at:[_t[3], _t[4]],is:_s[7]},
        {at:[_t[4], _t[5]],is:_s[2]},
        {at:[_t[5], _t[6]],is:_s[5]}
    ],
    
    
}

const current = document.querySelector(".current");
let _p = _get(_4TT);
let _1 = _d()
let _3 = m2h(h2m(_1.hrs, _1.min));
log(_p);
document.title = _p?.is.subject||"Nothing";
current.innerHTML = `
<div class="sub">${_p?.is.subject||"Nothing"}</div>
<div class="name">${_p?.is.teacher||""}</div>
<div class="hr"></div>
<div class="time time2"><span>StartAt</span><span>Now</span><span>EndAt</span></div>
<div class="time">
<div class="start">${m2h(_p?.at[0])||""}</div>
<div class="now">${_3||""}</div>
<div class="end">${m2h(_p?.at[1])||""}</div>
</div>
`
})()