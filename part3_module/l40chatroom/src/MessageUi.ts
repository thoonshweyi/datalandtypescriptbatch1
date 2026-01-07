export class MessageUI{

    private ul:HTMLElement;
    constructor(ul:HTMLElement){
        this.ul = ul
    }

    // clear li 
    clearli():void{
        this.ul.innerHTML = "";
    }


    // render li
    renderli(dataobj):void{

        // console.log(dataobj);

        // const when = dateFns.formatDistance(dataobj.createdAt.toDate(),new Date(),{addSuffix:true}); // {addSuffix:true} = ago
            // <div class="time">${when}</div>
        const htmllitag = `
            <li class="list-group-item">
                <span class="username">${dataobj.username}</span>
                <span class="message">${dataobj.message}</span>
            </li>
        `;

        this.ul.innerHTML += htmllitag; 
    }

    userInfo(data){

        console.log(data);

        const uid = data.uid;
        const email = data.email;
        const fullname = data.displayName;
        const photourl = data.photoURL;
        const createdtime = data.metadata.creationTime;

        // cdn
        const formatteddate = dateFns.format(new Date(createdtime),"dd MMM yyyy");

        const html = `
            <li class="list-group-item"><img src="${photourl}" width="50" alt="Profile Picture" /></li>
            <li class="list-group-item">UID : ${uid}</li>
            <li class="list-group-item">Display Name : ${fullname}</li>
            <li class="list-group-item">Email : ${email}</li>
            <li class="list-group-item">Created At : ${createdtime}</li>
        `;

        this.ul.innerHTML = html;
    }

}


