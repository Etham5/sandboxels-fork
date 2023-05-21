elements.test tool = {
    color: "#ff0000",
    tool: function(pixel) {
        if (pixel.element == "sand") {
            pixel.element = "test_tool"
        }
    },
    category: "tools",
};
