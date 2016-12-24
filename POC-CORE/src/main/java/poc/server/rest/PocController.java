package poc.server.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import poc.server.dao.PocDao;
import poc.shared.model.InputObj;
import poc.shared.model.InputObjElem;
import poc.shared.model.OutputObj;
import poc.shared.model.OutputObjElem;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by icttb0 on 23/12/2016.
 */
@RestController
@RequestMapping("/srv")
@Transactional
@CrossOrigin
public class PocController {

    private PocDao pocDao;

    public PocController() {
    }

    @Autowired
    public void setPocDao(PocDao pocDao) {
        this.pocDao = pocDao;
    }

    @RequestMapping( method= RequestMethod.GET, path = "/obj")
    public ResponseEntity<OutputObj> getOutputObj(@RequestParam(value="id", defaultValue="1") long id){
        OutputObj outputObj = pocDao.getOutputObj(id);
        List<OutputObjElem> outputObjElems = new ArrayList<OutputObjElem>();
        outputObjElems.add(new OutputObjElem(1,"POC-1"));
        outputObjElems.add(new OutputObjElem(2,"POC-2"));
        outputObj.setOutputObjElems(outputObjElems);
        HttpStatus status = outputObj != null ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return new ResponseEntity<OutputObj>(outputObj, status);
    }

    @RequestMapping( method=RequestMethod.POST, path = "/obj", consumes="application/json")
    public ResponseEntity<OutputObj> getOutputObj(@RequestBody InputObj inputObj){
        OutputObj outputObj = pocDao.getOutputObj(inputObj.getId());
        if (inputObj.getInputObjElems()!=null && inputObj.getInputObjElems().size()>0){
            List<OutputObjElem> outputObjElems = new ArrayList<OutputObjElem>();
            for(InputObjElem inputObjElem : inputObj.getInputObjElems()){
                outputObjElems.add(new OutputObjElem(inputObjElem.getId(),inputObjElem.getContent()));
            }
            outputObj.setOutputObjElems(outputObjElems);
        }
        HttpStatus status = outputObj != null ? HttpStatus.OK : HttpStatus.NOT_FOUND;
        return new ResponseEntity<OutputObj>(outputObj, status);
    }
}
