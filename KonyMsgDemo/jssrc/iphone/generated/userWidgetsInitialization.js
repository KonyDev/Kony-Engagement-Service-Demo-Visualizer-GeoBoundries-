function initializeUserWidgets() {
    kony.mvc.registry.add("com.konymp.login", "login", "loginController");
    kony.application.registerMaster({
        "namespace": "com.konymp",
        "classname": "login",
        "name": "com.konymp.login"
    });
}