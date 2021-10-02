An Odin Project, <a src='https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/battleship' target='_blank'>project</a>.

<h2>My Own philosophical:</h2> 
<p>Only just dawned on me how to properly 'test' private methods. Before I was mocking the calls to private methods, which then meant I essentially just had to make them public.. so all that doesn't really make any sense and is fairly stupid. Alas, the solution is to test my private methods by testing that their functionality was correclty implemented in the public methods that call them. SO, you essetially test your private methods inadvertly whilst you are unit testing your public methods. This makes so much more sense now...</p>

<h2>Notes about Project:</h2> 
<p>Used flaticon and font awesome for icons. Game logic is build off 3 factory functions, ship, gameboard, player, which are then fed to the React components.</p>
<p>There are also some questionable uses of state. Need to research further and consider WHERE and just how much to be really putting into state. I believe there is problem way too much unecessary re-rendering of everything in this app.</p>
