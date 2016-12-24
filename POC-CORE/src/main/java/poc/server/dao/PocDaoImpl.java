package poc.server.dao;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import poc.shared.model.OutputObj;

/**
 * Created by icttb0 on 18/12/2016.
 */
@Component
@Transactional
public class PocDaoImpl implements PocDao {

    public PocDaoImpl() {
    }

    @Override
    public OutputObj getOutputObj(long id) {
        return new OutputObj(id,"OutputObj with id: "+id);
    }
}
