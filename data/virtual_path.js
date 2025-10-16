const virtual_path = {
    "~": {
        "type": "folder",
        "children": {
            "portfolio": {
                "type": "folder",
                "children": {
                    "test": ""
                }
            },
            "test": {
                "type": "file",
                "action": 
                function test() {
                    alert('test');
                }
            }
        }
    }
}

export { virtual_path };