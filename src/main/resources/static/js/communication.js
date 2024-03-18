let iamHTML = `
I am Ganesh Maddipoti,
I am a software developer having 15 years of experience <br/>
My main technical skills are - java, spring, linux, AWS, Terraform, Spark, Angular <br/>
Roles I played - full stack developer, data engineer, DevOps associate, solution architect <br/>
I am the main member of the family to take care of - with wife and a kid <br/>
I am kind, patient, compassionate and good person.<br/>
<br/>
I am here to - earn money to secure family and have happy retirement <br/>
I am here to - trust the god, healthy and confident, maintain good relationships <br/>
I am here to - creative, socially active, joyful <br/>
<br/>
I want to - simplify things<br/>
I want to - to become helpful to the society <br/>
I want to - be hapy <br/>
`;

let dangerPowerHTML = `
<table>
<tr><td>Danger</td><td>power</td><tr/>
<tr><td>I am sorry</td><td>I apologize</td></tr>
<tr><td>Idea</td><td>Answer/Solution/Prorposal</td></tr>
<tr><td>I need the report by EOD</td>
<td>The report is due by EOD, <br/> place the subject first</td></tr>
<tr><td>Do you need/want</td><td>Would you like to</td></tr>
<tr><td>Unfair</td><td>Unequal</td></tr>
<tr><td>Sign the contract</td><td>Do the paper work <br/>Authorize the agreement</td></tr>
<tr><td>My Name is</td><td>I am Ganesh</td></tr>
<tr><td>No Problem</td><td>Its my pleasure</td></tr>
</tr>
</table>
`;

let tacticsHTML = `
Break the message into 3 parts, First of all, secondly, and finally <br/>
How to respond to objections <br/>
1) I can understand why you feel that way <br/>
2) Even others/I felt the same way before <br/>
3) However, I found that this will give solution to the requirement <br/>
How to say no to someone <br/>
1) I would like to help <br/>
2) However, I am afraid that my task is not going to complete <br/>
3) So, I wonder if you can postpone to tomorrow <br/>


`;

let communicationHTML = `Communication as Ethos, Pathos, and Logos <br/>
Ethos - who are you ? credibility <br/>
Pathos - why does this matter to me ? usage/benefit/important  <br/>
Logos - how are you going to get this logic across <br/>
Communication is a process, where sender sends the message, it will transmit over a channel <br/>
and receiver consumes that message <br/>

Elements of strategic communication <br/>
1) Open communication : Openly communicate to explain your credibility <br/>
2) Effective listening : ask the receiver whether the message understood correctly <br/>
3) Perceive right way : we want to be make sure that the receiver perceived right way <br/>
4) Dialogue : shared vision, shared agreement, and tied to the subject <br/>
5) Body language`;

let relationShipHTML = `
Principles <br/>
1) I am in charge of any relationship in my life <br/>
2) There is only 1 relationship in my life (one to many) <br/>
3) The one thing that could possibly missing is - what I am not giving <br/>

<br/>
Build positive relationships <br/>
1) Take a genuine interest in other people <br/>
2) Easy to get along with <br/>
3) Be generous with encouragement <br/>
`;

let senderHTML = `
Ethos - who are you ? credibility <br/>
The sender, who is communicating <br/>
Be Concise - clear and simple <br/>
Putting yourself in the shoes of the receiver <br/>
1) which method of communication they want - Notes/Images/Audio/Video <br/>
2) they want in detail or summary <br/>
3) at what frequency <br/>
Ask open ended questions to receiver to engage well <br/>
Ask also about how you feel about it - emotional <br/>
Silence - use it to receiver to think <br/>
Be authentic - sincere to the topic, and genuine, no show off <br/>
Story telling - giving example through story <br/>
`;

let persuasionHTML = `
Persuasion - is about influencing others to agree/align with your idea <br/>
1) Establish credibility <br/>
2) Build the command ground <br/>
3) Connect emotionally <br/>
4) Reinforce your idea, back to the point <br/>
5) Reciprocity - Giving before receiving <br/>
6) Social Proof - need to show social proof <br/>
7) Consistency - do it again / renew <br/>
8) Authority - expert in that space <br/>
9) Scarcity - make it scarce <br/>`;

let talkStylesHTML = `
Style of talking  <br/>
1) Sharing credit <br/>
2) Presenting rituals <br/>
3) Giving feedback/complement  <br/>
4) Authority <br/>
`;

let idealCommunicatorHTML = `
1) Confidence <br/>
2) Leadership skills <br/>
3) Relational - they have to get along with people <br/>
4) Economic sense <br/>
5) Professional <br/>
`;

let confidentCommHTML = `
1) Use direct eye contact <br/>
2) Smile authentically <br/>
3) Gesture <br/>
`;

let channelHTML = `
Logos - how are you going to get this logic across <br/>
it should be qualitative, no distractions, no loss <br/>
Types: <br/>
1) Report, mail - lower end of channel richness <br/>
2) Memos, instant messages, chat - bette than report <br/>
3) Phone, meeting - better than messages <br/>
4) Face to Face - richest channel of communication <br/>
`;

let receiverHTML = `
Pathos - why does this matter to me ? usage/benefit/important  <br/>
The receiver, who is consuming the message <br/>
Show people they matter - listen to them with complete attention <br/>
Show them you are following - by asking questions <br/>
Listening loudly - empathic listening is where you are hearing more than words <br/>
Listen first - instead of replying back to sender <br/>`;

let listenerTypesHTML = `
Types of listeners <br/>
1) Charismatics - new ideas, balance around facts and emotions <br/>
2) Thinkers - depend on data, may take time to convince <br/>
3) Skeptics - suspicious about the decision, we need to provide more information to challenge,
and be expert on the subject <br/>
4) Followers - they wan to know that somebody already done that <br/>
5) Controllers - they are depends on data, not emotional <br/>
`;

let communicationNodeDataArray = [
    {key: "Communication", desc: "Communication", color: "WhiteSmoke", isGroup: true, category: "tree", toolTipHTML: communicationHTML},

    {key: "Comm-Essentials", desc: "Essentials", color: "WhiteSmoke", isGroup: true, group: "Communication", category: "grid"},


    {key: "Comm-whoAmI", desc: "I Am", color: "WhiteSmoke", group: "Comm-Essentials", category: "simple", toolTipHTML: iamHTML},
    {key: "Comm-dangerPower", desc: "Danger Power", color: "WhiteSmoke", group: "Comm-Essentials", category: "simple", toolTipHTML: dangerPowerHTML},
    {key: "Comm-tactics", desc: "Tactics", color: "WhiteSmoke", group: "Comm-Essentials", category: "simple", toolTipHTML: tacticsHTML},
    {key: "Comm-Relationship", desc: "Relationships", color: "WhiteSmoke", isGroup: true, group: "Comm-Essentials", category: "grid-congested", toolTipHTML: relationShipHTML},


    {key: "Comm-Sender", desc: "Sender", color: "WhiteSmoke", isGroup: true, group: "Communication", category: "grid-congested", toolTipHTML: senderHTML},
    {key: "Comm-Persuasion", desc: "Persuasion", color: "WhiteSmoke", group:"Comm-Sender", category: "picTemplate", toolTipHTML: persuasionHTML, img: "assets/img/terraform/tf-hcl.svg"},
    {key: "Comm-Styles", desc: "Styles", color: "WhiteSmoke", group:"Comm-Sender", category: "picTemplate", toolTipHTML: talkStylesHTML, img: "assets/img/terraform/tf-hcl.svg"},
    {key: "Comm-ideal", desc: "Ideal Communicator", color: "WhiteSmoke", group:"Comm-Sender", category: "picTemplate", toolTipHTML: idealCommunicatorHTML, img: "assets/img/terraform/tf-hcl.svg"},
    {key: "Comm-Confidence", desc: "Confidence Show", color: "WhiteSmoke", group:"Comm-Sender", category: "picTemplate", toolTipHTML: confidentCommHTML, img: "assets/img/terraform/tf-hcl.svg"},


    {key: "Comm-Channel", desc: "Channel", color: "WhiteSmoke", isGroup: true, group: "Communication", category: "grid-congested", toolTipHTML: channelHTML},

    {key: "Comm-Receiver", desc: "Receiver", color: "WhiteSmoke", isGroup: true, group: "Communication", category: "grid-congested", toolTipHTML: receiverHTML},
    {key: "Comm-ListenerTypes", desc: "Listener Types", color: "WhiteSmoke", group:"Comm-Receiver", category: "picTemplate", toolTipHTML: listenerTypesHTML, img: "assets/img/terraform/tf-hcl.svg"},

//    {key: "Java-Solid", desc: "Solid Principles", color: "WhiteSmoke", isGroup: true, group: "Java", category: "tree"},
//    {key: "Java-SP-singleResp", desc: "Single Responsibility", color: "WhiteSmoke", group:"Java-Solid", category: "picTemplate", toolTipHTML: javaSPSingleRespHTML, img: "assets/img/terraform/tf-hcl.svg"},
//    {key: "Java-SP-OpenClose", desc: "Open Close", color: "WhiteSmoke", group:"Java-Solid", category: "picTemplate", toolTipHTML: javaSPOpenCloseHTML, img: "assets/img/terraform/tf-hcl.svg"},
//    {key: "Java-SP-LiskovSubs", desc: "Liskov Substitution", color: "WhiteSmoke", group:"Java-Solid", category: "picTemplate", toolTipHTML: javaSPLiskovSubHTML, img: "assets/img/terraform/tf-hcl.svg"},
//    {key: "Java-SP-Interface-Segregation", desc: "Interface Segregation", color: "WhiteSmoke", group:"Java-Solid", category: "picTemplate", toolTipHTML: javaSPInterfaceSegregationHTML, img: "assets/img/terraform/tf-hcl.svg"},
//

];

let communicationLinkDataArray = [
    {from:"Comm-Sender", to: "Comm-Channel", category: "simplelink"},
    {from:"Comm-Channel", to: "Comm-Receiver", category: "simplelink"},
];

nodeDataArray = nodeDataArray.concat(communicationNodeDataArray);
linkDataArray = linkDataArray.concat(communicationLinkDataArray);