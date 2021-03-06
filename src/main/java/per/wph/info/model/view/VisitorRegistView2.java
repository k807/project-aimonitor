package per.wph.info.model.view;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

/**
 * =============================================
 *
 * @author wu
 * @create 2018-02-04 15:16
 * =============================================
 */
public class VisitorRegistView2 {
    private Long vid;
    private Long oid;
    private String name;
    private String idnumber;
    private String phone;
    private Date creatTime;
    private Integer relationType;
    private List<Long> faceIdList;

    public Long getVid() {
        return vid;
    }

    public void setVid(Long vid) {
        this.vid = vid;
    }

    public Long getOid() {
        return oid;
    }

    public void setOid(Long oid) {
        this.oid = oid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdnumber() {
        return idnumber;
    }

    public void setIdnumber(String idnumber) {
        this.idnumber = idnumber;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getCreatTime() {
        return creatTime;
    }

    public void setCreatTime(Date creatTime) {
        this.creatTime = creatTime;
    }

    public Integer getRelationType() {
        return relationType;
    }

    public void setRelationType(Integer relationType) {
        this.relationType = relationType;
    }

    public List<Long> getFaceIdList() {
        return faceIdList;
    }

    public void setFaceIdList(List<Long> faceIdList) {
        this.faceIdList = faceIdList;
    }
}
