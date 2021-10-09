An Odin Project, <a href='https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/battleship' target='_blank'>project</a>.

<h2>My Own philosophical Notes:</h2> 
<p>Only just dawned on me how to properly 'test' private methods. Before I was mocking the calls to private methods, which then meant I essentially just had to make them public.. so all that doesn't really make any sense and is fairly stupid. Alas, the solution is to test my private methods by testing that their functionality was correclty implemented in the public methods that call them. SO, you essetially test your private methods inadvertly whilst you are unit testing your public methods. This makes so much more sense now...</p>

<h2>Notes about Project:</h2> 
<p>Used flaticon and font awesome for icons. Game logic is build off 3 factory functions, ship, gameboard, player, which are then fed to the React components.</p>
<p>There are also some questionable uses of state. Need to research further and consider WHERE and just how much to be really putting into state. I believe there is problem way too much unecessary re-rendering of everything in this app.</p>

<h2>Possible extra features</h2>
<p>Human vs Human with some kind of cover screen whilst they pass device between them.</p>
<p>Smart AI lol.</p>

<h2>Hacks</h2>
<p>Atm, the gameloop component only re-renders after every succesful shot because the 'turn' state counter is incremented. The grids passed down to the 'BoardGrid' components won't re-render on their own because the array still looks the same, and hence the BoardGrid component doesn't recognise a change in props</p>
<p>Similarly, the gameloop only re-renders to the one new board, because of the game counter 'hack' in state changing. Not ideal lol.</p>
