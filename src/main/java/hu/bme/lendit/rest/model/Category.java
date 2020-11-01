package hu.bme.lendit.rest.model;

import hu.bme.lendit.database.entity.DeviceEntity;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class Category implements Serializable {

    private String name;

}
