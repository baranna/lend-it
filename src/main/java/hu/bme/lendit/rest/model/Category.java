package hu.bme.lendit.rest.model;

import java.io.Serializable;

public class Category implements Serializable {

	private String name;
	
	private static final long serialVersionUID = -7024880172335725496L;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
    

}
