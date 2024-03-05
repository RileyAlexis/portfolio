export const codeData = [
    `
    function addUser(data) {
    console.log('Data to add user', data);
    const isUnique = onlineUsers.every(user => user.id !== data.id);
    if (isUnique) {
        onlineUsers.push(data);
    }
}

function removeUser(data) {
    console.log('User Removed', data);
    onlineUsers = onlineUsers.filter((item) => item.userid !== data.userId);
}

function initializeSockets(server) {

    let messages = [{
        user: 'Riley',
        message: 'Websockets has connected to the things and it probably mostly works now'
    }];


    const io = socketIO(server, {
        cors: {
            origin: "http://localhost:3000",
            // path: "/sockets/",
            credentials: true
        }
    });

    // const io = socketIO(server);

    io.engine.on("connection_error", (error) => {
        console.log('Error Request', error.req);
        console.log('Error Code', error.code);
        console.log('Error Message', error.message);
        console.log('Error Conext', error.context);
    })

    io.on('connection', (socket) => {
        console.log('A user connected to ', socket.id);
        openConnections.push(socket.id);
        console.log("Open socket connections", openConnections);
        console.log("Online Users", onlineUsers);
        io.emit("messages", messages);


        socket.on('onlineUsers:post', (data) => {
            console.log('Online Users received', data);
            addUser(data.user);
            socket.emit('onlineUsers:get', onlineUsers);
        });

        socket.on('onlineUsers:delete', (data) => {
            console.log('Online user removed', data);
            removeUser(data.user);
            socket.emit('onlineUsers:get', onlineUsers);
        })

        socket.on('message:post', (data) => {
            messages.push({ user: data.user, message: data.message });
            io.emit("messages", messages); //use io to send to all connections
            console.log('New Message', data);
            console.log(openConnections);
        });

        socket.on('disconnect', () => {
            console.log('User Disconnected', socket.id);
            openConnections = openConnections.filter((item) => item !== socket.id);
            console.log("Open Connections", openConnections);
            console.log("Online Users", onlineUsers);
        });
    `,


    `export function updateTicker() {
    const state = store.getState();
    //Copy state and unfreeze it so vars can be manipulated and then update the state at the end of the ticker process
    let plants = deepUnfreeze(state.plants);
    let stats = deepUnfreeze(state.stats);
    const robots = state.robots;
    const resources = state.resources;
    const buildings = state.buildings;
    const log = deepUnfreeze(state.log);

    //Engine stops here if there are no plants.
    //Calls each function in turn to complete the game update cycle
    if (plants.plantCount > 0 && state.runEngine) {
        if (stats.ripeCucumbers < (plants.maxYield * plants.plantCount)) growPlants(plants);
        let newSeeds = generateSeeds(plants); //Returns # of new seeds(if any)
        let picked = runPickerBots(robots, stats); //Returns the # of ripe cucumbers picked by picker bots
        let pickled = runPicklerBots(resources, robots, stats); //returns the # of pickles made by pickler bots
        let seeds = runPlanterBots(plants, resources, robots, stats); //returns the # of seeds planted by planter bots
        let recurringCost = getRecurringCost(buildings); //Calculates the recurring cost of any active buildings
        let newLog = cycleLog(log); //Prevents the game log from getting too long

        stats.totalProduction += pickled;
        stats.ripeCucumbers -= picked;

        //Cycle through function for buildings if they are active and purchased
        buildings.forEach((item) => {
            if (item.active && item.purchased) {
                runBuilding(item);
            }
        })
        //Compares the totalProduction property to the farmMenu showAt property to determine what buttons are made available to players
export function checkButtons() {
    const state = store.getState();
    const pickles = state.resources.pickles[state.resources.pickles.length - 1];
    const farmMenu = state.farmMenu;

    for (let i = 0; i < farmMenu.length; i++) {
        if (pickles >= farmMenu[i].showAt && !farmMenu[i].show) {
            store.dispatch({ type: 'farmMenu/showItem', payload: farmMenu[i].name });
        }
    }

    if (state.stats.ripeCucumbers > 0 && !state.farmMenu[1].show) {
        store.dispatch({ type: 'farmMenu/showItem', payload: 'Pick' });
    }
    if (state.resources.cucumbers[state.resources.cucumbers.length - 1] >= 5 && !state.farmMenu[2].show) {
        store.dispatch({ type: 'farmMenu/showItem', payload: 'Pickle' });
    }
}
//Compates the totalProduction property to the locationMenu showAt property to determine which tabs are shown to players
export function checkTabs(totalProduction, locationMenu) {
    const state = store.getState();

    if (totalProduction === undefined && locationMenu === undefined) {
        totalProduction = state.resources.pickles[state.resources.pickles.length - 1];
        locationMenu = state.locationMenu;
    }

    for (let i = 0; i < locationMenu.length; i++) {
        if ((totalProduction >= locationMenu[i].showAt) && !locationMenu[i].show) {
            store.dispatch({ type: 'locationMenu/showItem', payload: locationMenu[i].id });
        }
    }
}
        `,

    `let data = 1`




]
