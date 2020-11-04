package hu.bme.lendit.database.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "category")
public class CategoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;

    @Column(name="name")
    private String name;

    @OneToMany(mappedBy="category")
    private List<DeviceEntity> items;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<DeviceEntity> getItems() {
		return items;
	}

	public void setItems(List<DeviceEntity> items) {
		this.items = items;
	}
    
    
}
