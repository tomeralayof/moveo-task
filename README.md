Project Summery:

Routers And Components:
The project contains 3 main components:

1. PadApp Component - Father Component of PadList component. contains all the fanctionality and states of the project and send send it to its children by props.
2. PadList Compnent - Children of PadApp component and father of PadPreview component. contains the pad state variable and togglePlat function which enables the click button. PadList looping all pads by the number of existing objects inside the array
3. PadPreview Component - Children of PadList cmponent. Its goal is to render the pads into the browser including the onClick function.
   //service: include the array of object pattern and general functions being used inside the project which are related to the array of object.

Hooks:
[pads,setPads] => responsible on the pads array of object which comes from the service.
[isPlayed, setIsPlayed] => responsible on the play button which unables the all pads.
[playlist, setPlaylist] => contain the list of played pads.

Functions:
togglePlay() => unable each and every pad to be activated and play the audio or diable after another click if the pad is already activate. breaks the function if is played is false.
resetPlaylist() => disable all activate pads by changing the const isPlayed to be false by mapping the new array of pads and setting the pads to be false.
