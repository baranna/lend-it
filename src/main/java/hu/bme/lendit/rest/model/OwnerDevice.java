package hu.bme.lendit.rest.model;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
	    "id",
        "name",
        "category",
        "available"
})
public class OwnerDevice {

	@JsonProperty("id")
    private Integer id;
	@JsonProperty("name")
    private String name;
	@JsonProperty("category")
    private String category;
    @JsonProperty("available")
    private Boolean available;
    
    public OwnerDevice(long id, String name, String category, Boolean available) {
    	this.id= (int) id;
    	this.name=name;
    	this.category=category;
    	this.available=available;
    }
    
    @JsonProperty("id")
    public Integer getId() {
        return id;
    }

    @JsonProperty("id")
    public void setId(Integer id) {
        this.id = id;
    }
    
    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("name")
    public void setName(String name) {
        this.name = name;
    }

    @JsonProperty("category")
    public String getCategory() {
        return category;
    }

    @JsonProperty("category")
    public void setCategory(String category) {
        this.category = category;
    }
    
    @JsonProperty("available")
    public Boolean getAvailable() {
        return available;
    }

    @JsonProperty("available")
    public void setAvailable(Boolean available) {
        this.available = available;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).append("id", id).append("name", name).append("category", category).append("available", available).toString();
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder().append(id).append(name).append(category).append(available).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof Device) == false) {
            return false;
        }
        OwnerDevice rhs = ((OwnerDevice) other);
        return new EqualsBuilder().append(id, rhs.id).append(name, rhs.name).append(category, rhs.category).append(available, rhs.available).isEquals();
    }
}
