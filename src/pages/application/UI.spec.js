import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Application from "./Application";
import Tools from "../../components/Tools/Tools";


configure({
    adapter: new Adapter()
});

describe("<Application />", () => {
    it("", () => {
        const wrapper = shallow(<Application/>);

        expect(wrapper.find(Tools)).toHaveLength(1)
    });
});
