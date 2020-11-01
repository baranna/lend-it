package hu.bme.lendit.database.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Device")
@Getter
@Setter
public class DeviceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @ManyToOne
    @JoinColumn(name="category", nullable=false)
    private CategoryEntity category;

    private Integer price;
    private Boolean available;
}
