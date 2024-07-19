1) useState =>kis bi page ya component per tempralily time ka liye data ko stor karne ka liya use hote ha
2) useref  :- React Native में useRef का उपयोग करने का तरीका बहुत ही उपयोगी है, खासकर जब आपको किसी DOM नोड या किसी mutable value को बनाए रखने की आवश्यकता होती है जो re-render के बीच में परिवर्तित नहीं होती। useRef React का एक Hook है जो हमें एक mutable object देता है जिसका .current property हमारे द्वारा दिए गए initial value से सेट होता है। इस Hook का उपयोग functional components में किया जाता है।

यहां useRef का उपयोग करने का तरीका है:

Step-by-Step Explanation
Import useRef:
सबसे पहले, आपको useRef को React से import करना होगा।

javascript
Copy code
import React, { useRef } from 'react';
Initialize useRef:
useRef को initialize करें और एक mutable reference object प्राप्त करें। यह object re-render के बीच में भी स्थिर रहता है।

javascript
Copy code
const myRef = useRef(initialValue);
उदाहरण के लिए, यदि आप किसी TextInput पर focus करना चाहते हैं:

javascript
Copy code
const inputRef = useRef(null);
Attach ref to a component:
React Native component पर ref attribute का उपयोग करें। उदाहरण के लिए, TextInput component पर:

javascript
Copy code
<TextInput ref={inputRef} />
Access the ref:
अब आप reference object के current property का उपयोग कर सकते हैं। यह उस DOM node को reference करेगा या उस value को रखेगा जिसे आपने initialize किया था।

उदाहरण के लिए, किसी button के क्लिक पर TextInput को focus करना:

javascript
Copy code
const handleFocus = () => {
if (inputRef.current) {
inputRef.current.focus();
}
};

return (
<View>
<TextInput ref={inputRef} />
<Button title="Focus the input" onPress={handleFocus} />
</View>
);
Complete Example
यहां एक पूरा उदाहरण है जो दिखाता है कि कैसे useRef का उपयोग करके TextInput को focus किया जा सकता है:

javascript
Copy code
import React, { useRef } from 'react';
import { View, TextInput, Button } from 'react-native';

const MyComponent = () => {
const inputRef = useRef(null);

const handleFocus = () => {
if (inputRef.current) {
inputRef.current.focus();
}
};

return (
<View>
<TextInput ref={inputRef} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />
<Button title="Focus the input" onPress={handleFocus} />
</View>
);
};

export default MyComponent;
Use Cases for useRef
Accessing DOM Elements: जैसे ऊपर के example में TextInput को focus करना।
Storing Mutable Values: किसी mutable value को रखने के लिए जो component re-renders के बीच में स्थिर रहती है, जैसे timers, intervals, या किसी library instance का reference।
Avoiding Re-Renders: अगर आप किसी value को store करना चाहते हैं जो component के state में न हो और उसके बदलने पर component re-render न हो।
ध्यान रखने योग्य बातें
useRef re-render पर नई reference object नहीं बनाता, यह वही object रखता है।
इसका उपयोग ऐसे cases में किया जाना चाहिए जहां आपको direct DOM manipulations की आवश्यकता होती है या mutable values को handle करना होता है।
useRef React Native में बहुत ही शक्तिशाली tool है और इसका सही तरीके से उपयोग करने पर यह आपके component को अधिक interactive और responsive बना सकता है ।।

my bhase ma

3) useId
4) useEffect
5) usecontext==ho gya
6) usereducer=ho gya
7) usememo
8) useCallback
9) memo) ===>   jab humari component ka  props ma change hoga usi yha re-render krega
10) secureStorage
11) location
12) camera
13) AV

expo location

1. Install expo location package
2. Setup Plugin In Bare Project & Config in App.json In Expo Managed Project
3. check or request location permission
4. if garnted get coordinates from current location

* [X]  [X]  Advance * ( Sachin Self Task )

geocoding==> addresh sa cordinate miltaha

reverse geocoding==> corrdinates sa adrresh nikal skate ha

nearby places==> longitud or latitude ka base per google api hit hote ha jo hma nearest location dati ha

NAVIGATION) === modal ka ander navigation hum function  ka andher use karti ha

example:-
const navigateToGroup = () => {
navigation.navigate('Group');
};

const   Goback = function(){
navigation.goBack()
}
