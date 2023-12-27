package jp.co.coki.kimura.controller;

import org.springframework.web.bind.annotation.RestController;

import jp.co.coki.kimura.dto.SomeData;
import jp.co.coki.kimura.controller.common.RestApiController;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class SampleController extends RestApiController {
    @GetMapping("/getSample")
    public SomeData getMethodName() {
        return new SomeData("Sample");
    }
}
