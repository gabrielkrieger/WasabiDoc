(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{235:function(t,e,n){"use strict";n.r(e);var i=n(0),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"coinjoin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coinjoin"}},[t._v("#")]),t._v(" CoinJoin")]),t._v(" "),n("p",[t._v("A "),n("a",{attrs:{href:"https://en.bitcoin.it/Privacy#CoinJoin",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoinJoin"),n("OutboundLink")],1),t._v(" is a special Bitcoin transaction where several peers get together to literally join their coins in a single transaction.\nThey collaboratively build a transaction where each of them provides some coins as inputs, and fresh addresses as outputs.\nThe concept has been around since the early days of Bitcoin, and it was formalized by the great Greg Maxwell in "),n("a",{attrs:{href:"https://bitcointalk.org/index.php?topic=279249.msg2983902",target:"_blank",rel:"noopener noreferrer"}},[t._v("this awesome introductory thread"),n("OutboundLink")],1),t._v('.\nThe goal is to gain privacy by breaking the link of which input "pays" which output, so that any of the outputs cannot be attributed to the owner of the input.\nAnd therefor it is very important that the value of the outputs is exactly equal.\nWasabi enables trustless [meaning nobody can steal] and private [meaning even the coordinator cannot spy] Schnorr blind signature CoinJoin according to the '),n("a",{attrs:{href:"https://github.com/nopara73/zerolink",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZeroLink fungibility framework"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#doing-coinjoin-step-by-step"}},[t._v("Doing CoinJoin step-by-step")])]),n("li",[n("a",{attrs:{href:"#zerolink-protocol-step-by-step"}},[t._v("ZeroLink protocol step-by-step")]),n("ul",[n("li",[n("a",{attrs:{href:"#input-registration"}},[t._v("Input registration")])]),n("li",[n("a",{attrs:{href:"#connection-confirmation"}},[t._v("Connection confirmation")])]),n("li",[n("a",{attrs:{href:"#output-registration"}},[t._v("Output registration")])]),n("li",[n("a",{attrs:{href:"#signing"}},[t._v("Signing")])]),n("li",[n("a",{attrs:{href:"#broadcasting"}},[t._v("Broadcasting")])])])]),n("li",[n("a",{attrs:{href:"#read-more"}},[t._v("Read more")])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"doing-coinjoin-step-by-step"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#doing-coinjoin-step-by-step"}},[t._v("#")]),t._v(" Doing CoinJoin step-by-step")]),t._v(" "),n("ol",[n("li",[t._v('Launch Wasabi, and open your wallet with the coins that you want to join.\nNotice that it is not yet possible to CoinJoin from a hardware wallet, the keys must be "hot" on your computer.\nThen open the '),n("code",[t._v("CoinJoin")]),t._v(" tab from the right side menu.")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/CoinJoin.png",alt:""}})]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("Select coins for joining by clicking the check box in the coin list.\nYou can select one or more coins, but when several are selected, then they can be linked and clustered by an attacker.\nSo choose carefully which coins you want others to know belong to the same entity (you).\nYou can select red shield coins, which are not private yet, but will gain anonymity set in this round of CoinJoin.\nAlso you can select green shield coins, who come from a previous round of CoinJoin, so that they gain even more anonymity set.\nWhat is important is that the sum of coins registered have a value larger than the minimum level, which is currently roughly 0.1 bitcoin.")])]),t._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("Do not select coins with different colors (different anonymity sets) to CoinJoin in the same round.\nBecause the coins with higher anonymity set will loose some of their anonymity set to equal the anonymity set of the lower ones.\nThe best option would be to select coins with the same anonymity set.")])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("Specify anonymity set target.\nWasabi will automatically re-register your coin for the next round until this target is reached.\nYou can easily toggle between three levels by clicking on the shield.\nYou can also "),n("router-link",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#how-can-i-change-the-anonset-target"}},[t._v("change the value")]),t._v(" of the three shields in the settings.")],1)]),t._v(" "),n("p",[n("img",{attrs:{src:"/CoinJoinAnonsetTargetYellow.png",alt:""}}),t._v(" "),n("img",{attrs:{src:"/CoinJoinAnonsetTargetGreen.png",alt:""}}),t._v(" "),n("img",{attrs:{src:"/CoinJoinAnonsetTargetCheck.png",alt:""}})]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[t._v("Enter password and click "),n("code",[t._v("Enqueue Selected Coins")]),t._v(".\nYou only have to enter the password for the first round of mixing, the re-mix directly after is done without a password input.")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/CoinJoinCoinsBeingCoinJoined.png",alt:""}})]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("Now wait until the CoinJoin is complete, the round starts either as soon as 100 peers have registered their coins, or after two hours since the last round.\nFrom now on there is no more interaction required, just leave Wasabi running in the background of your computer.")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/CoinJoinStatus.png",alt:""}})]),t._v(" "),n("ol",{attrs:{start:"6"}},[n("li",[t._v("When the CoinJoin is finished, and the CoinJoin transaction is broadcast, you will receive a fresh coin with a high anonymity set, as well as non-private change.")])]),t._v(" "),n("h2",{attrs:{id:"zerolink-protocol-step-by-step"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zerolink-protocol-step-by-step"}},[t._v("#")]),t._v(" ZeroLink protocol step-by-step")]),t._v(" "),n("h3",{attrs:{id:"input-registration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-registration"}},[t._v("#")]),t._v(" Input registration")]),t._v(" "),n("p",[t._v("During the "),n("a",{attrs:{href:"https://github.com/nopara73/zerolink#1-input-registration-phase",target:"_blank",rel:"noopener noreferrer"}},[t._v("input registration"),n("OutboundLink")],1),t._v(", you select which coins you want to register for CoinJoin.\nThese coins need to be confirmed on the Bitcoin timechain, unless they are from a Wasabi CoinJoin and you re-register them.\nIn the background, Wasabi generates an input proof, a signature over a challenge message with the private key that locks up the coins.\nWith this the coordinator can verify that you actually own these coins.\nThen your Wasabi client generates several fresh addresses, depending on the value of inputs registered.\nThe address of the anonset CoinJoin output must not be linked to your input, and thus it is "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Blind_signature",target:"_blank",rel:"noopener noreferrer"}},[t._v("cryptographically blinded"),n("OutboundLink")],1),t._v(" to incomprehensible cypher-text.\nSince the change output can be easily linked to your input with "),n("router-link",{attrs:{to:"/FAQ/FAQ-GeneralBitcoinPrivacy.html#what-is-a-coinjoin-sudoku"}},[t._v("CoinJoin sudoku")]),t._v(", this address is not blinded, but kept in clear-text.")],1),t._v(" "),n("p",[t._v("Wasabi wallet generates a new "),n("a",{attrs:{href:"https://tb-manual.torproject.org/managing-identities/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tor identity"),n("OutboundLink")],1),t._v(" called "),n("strong",[t._v("Alice")]),t._v(", she is like a separate entity, and for every round you use a new Alice who is not linked to any previous connection.\nWith Alice, you send some information to the Wasabi coordinator server:")]),t._v(" "),n("ul",[n("li",[t._v("The input coin that you want to register, together with the input proof signature.")]),t._v(" "),n("li",[t._v("The clear text change address.")]),t._v(" "),n("li",[t._v("The blinded anonset CoinJoin output.")])]),t._v(" "),n("p",[t._v("The Wasabi coordinator now verifies that:")]),t._v(" "),n("ul",[n("li",[t._v("There is still room for more peers on this CoinJoin.")]),t._v(" "),n("li",[t._v("The blinded output has never been registered before.")]),t._v(" "),n("li",[t._v("Each input has not been registered before, is not banned, is unspent, and that the input proof is valid.")]),t._v(" "),n("li",[t._v("That the sum value of inputs is higher than the minimum required value of roughly 0.1 bitcoin.")])]),t._v(" "),n("p",[t._v("Only when all these checks are valid does the coordinator sign the blinded output.\nHe does not know the address that he is signing, because it is blinded cypher-text.\nThis signature is proof that the coordinator has verified that Alice is not cheating.\nThe coordinator sends the signed blinded output back to Alice, together with a unique ID that is the identifier of this specific Alice in this round.")]),t._v(" "),n("p",[t._v("Alice has the secret parameters needed to unblind the signed blinded output.\nWith the magic of cryptography, she can reveal the clear-text address of the anonset CoinJoin output, however, the coordinator signature is still attached to this address.")]),t._v(" "),n("p",[t._v("The input registration phase ends when either, the number of registered inputs exceeds the number of required inputs [meaning anonymity set of 100 peers]; or when the last round was two hours ago.")]),t._v(" "),n("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/v1fIjFR6e5Q/hqdefault.jpg)"},attrs:{"data-id":"v1fIjFR6e5Q"}},[n("iframe",{attrs:{title:"YouTube v1fIjFR6e5Q","data-src":"https://www.youtube-nocookie.com/embed/v1fIjFR6e5Q?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),n("h3",{attrs:{id:"connection-confirmation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connection-confirmation"}},[t._v("#")]),t._v(" Connection confirmation")]),t._v(" "),n("p",[t._v("There are many Alices (different users) registering their inputs in the first phase, and this takes a while, up to two hours.\nThe connection confirmation phase makes sure that all of them are still online and ready to continue.\nThe coordinator verifies the unique ID from all the Alices, and when everyone is still communicating, then the coordinator returns the round hash of all the registered inputs.\nThe round is abandoned and re-started if too many Alices have dropped, for example when their Wasabi is shut down, or when their tor connection is temporarily broken.")]),t._v(" "),n("p",[t._v("The connection confirmation phase ends when all Alices have provided their inputs, or after a timeout when the online Alices are still larger than the required number of peers.")]),t._v(" "),n("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/hhkL0QvIaGY/hqdefault.jpg)"},attrs:{"data-id":"hhkL0QvIaGY"}},[n("iframe",{attrs:{title:"YouTube hhkL0QvIaGY","data-src":"https://www.youtube-nocookie.com/embed/hhkL0QvIaGY?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),n("h3",{attrs:{id:"output-registration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-registration"}},[t._v("#")]),t._v(" Output registration")]),t._v(" "),n("p",[t._v("Now that all peers are online, we are ready to proceed with the "),n("a",{attrs:{href:"https://github.com/nopara73/zerolink#2-output-registration-phase",target:"_blank",rel:"noopener noreferrer"}},[t._v("output registration phase"),n("OutboundLink")],1),t._v(" of the round.\nYour Wasabi client generates a completely new tor identity "),n("strong",[t._v("Bob")]),t._v(", that is in no way tied to Alice.\nBob sends to the Wasabi coordinator:")]),t._v(" "),n("ul",[n("li",[t._v("The clear-text address for the anonset CoinJoin output.")]),t._v(" "),n("li",[t._v("The coordinator signature over that output.")]),t._v(" "),n("li",[t._v("The round hash of all the inputs.")])]),t._v(" "),n("p",[t._v("Because the coordinator can verify his own signature, he knows that this output was initially sent by any Alice [he cannot know which Alice exactly] and that he has verified that everything is in order.")]),t._v(" "),n("p",[t._v("It is very important that the coordinator cannot link Alice to Bob.\nBecause Alice has sent the clear-text input, and Bob sends the clear-text output.\nSo, if the two were to be linked, then the coordinator can specifically link the input to the output, meaning that the anonymity set is 1.\nBecause Alice commits to the output by sending it blinded, and because Bob is a new tor identity not linked to Alice, the coordinator can verify that nobody is cheating, but he cannot deanonymize the peers.")]),t._v(" "),n("p",[t._v("The output registration phase ends when the value of clear-text outputs plus change outputs is equal to the value of inputs, meaning all Bobs have registered.\nIf after a timeout not all outputs are registered, then this round is abandoned, the missing peers are banned, and a new round is started.")]),t._v(" "),n("h3",{attrs:{id:"signing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing"}},[t._v("#")]),t._v(" Signing")]),t._v(" "),n("p",[t._v("Now that all inputs and outputs are registered, the Wasabi coordinator can start the "),n("a",{attrs:{href:"https://github.com/nopara73/zerolink#3-signing-phase",target:"_blank",rel:"noopener noreferrer"}},[t._v("signing phase"),n("OutboundLink")],1),t._v(" by building the CoinJoin transaction with all the registered inputs, the anonset outputs, the change outputs and the coordinator fee output.\nHe sends this transaction to all the Alices of this round.\nEach Alice verifies that:")]),t._v(" "),n("ul",[n("li",[t._v("The committed round hash is equal to the hash of all the inputs in the proposed transaction.")]),t._v(" "),n("li",[t._v("Her inputs and outputs are correctly included.")])]),t._v(" "),n("p",[t._v("Then she signs the transaction with the private keys of her inputs.\nAlice sends the uniqueID, the signature and the input index to the coordinator, who then verifies this information.")]),t._v(" "),n("p",[t._v("The signing phase ends when the coordinator has all the valid signatures for all the registered inputs.")]),t._v(" "),n("h3",{attrs:{id:"broadcasting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#broadcasting"}},[t._v("#")]),t._v(" Broadcasting")]),t._v(" "),n("p",[t._v("The CoinJoin transaction is successfully built and signed, and it is now ready to be "),n("a",{attrs:{href:"https://github.com/nopara73/zerolink#transaction-broadcasting",target:"_blank",rel:"noopener noreferrer"}},[t._v("broadcasted"),n("OutboundLink")],1),t._v(" to the peers of the Bitcoin network.\nThe coordinator sends this transaction over the tor network to a random Bitcoin P2P node, and from there it is gossiped to other nodes and miners.\nWasabi is saving on mining fees by setting a confirmation target of roughly 12 hours, but you can re-register unconfirmed anonset outputs for the next round of CoinJoin.")]),t._v(" "),n("h2",{attrs:{id:"read-more"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#read-more"}},[t._v("#")]),t._v(" Read more")]),t._v(" "),n("p",[t._v("Want to read more about CoinJoins on Wasabi?\n"),n("router-link",{attrs:{to:"/FAQ/FAQ-UseWasabi.html#coinjoin"}},[t._v("CoinJoin FAQs")]),t._v(" is here to help you.")],1)])}),[],!1,null,null,null);e.default=o.exports}}]);