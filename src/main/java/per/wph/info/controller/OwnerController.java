package per.wph.info.controller;

import com.sun.org.apache.xpath.internal.operations.Bool;
import org.apache.shiro.authz.UnauthorizedException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import per.wph.common.ApiResult;
import per.wph.common.controller.BaseController;
import per.wph.common.generator.ApiResultGenerator;
import per.wph.common.util.MapUtil;
import per.wph.info.model.UserInfo;
import per.wph.info.model.view.OwnerInfoView;
import per.wph.info.model.view.OwnerRegistView;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * =============================================
 *
 * @author wu
 * @create 2018-02-01 14:35
 * =============================================
 */
@Controller
@RequestMapping("/owner")
public class OwnerController extends BaseController {

    /**
     * 业主提交认证申请
     * @param session
     * @param ids
     * @param ownerRegistView
     * @return
     */
    @RequestMapping("/regist")
    @ResponseBody
    public ApiResult regist(HttpSession session, Integer ids[] ,OwnerRegistView ownerRegistView){
        Optional username = Optional.of(session.getAttribute(USERNAME));
        if(ownerService.isFrozen((String) username.get())){

        }
        UserInfo userInfo = userService.getUserInfoByUsername((String) username.get());
        Long ownId = userInfo.getUid();
        ownerRegistView.setOid(ownId);
        Object faceIdMap = session.getAttribute(FACE_MODEL_LIST);
        if (faceIdMap==null){
            return ApiResultGenerator.errorResult("请上传照片",null);
        }
        List<Long> faceIdList = MapUtil.mapFiltByIds(faceIdMap==null ? null : (Map<Integer,Long>)faceIdMap,ids);
        ownerRegistView.setFaceIdList(faceIdList);
        ownerService.saveOwnerRegistView(ownerRegistView, Boolean.FALSE);
        return ApiResultGenerator.succssResult("注册成功，请等待审核");
    }


    /**
     * 通过业主认证审核
     * @param session
     * @param oid
     * @return
     */
    @RequestMapping("/permit/accessRegist")
    @ResponseBody
    public ApiResult accessRegist(HttpSession session, Long oid){

        return ApiResultGenerator.succssResult("注册成功，请等待审核");
    }

    /**
     *  获得小区下的所有业主信息
     * @param session
     * @return
     */
    @RequestMapping("/permit/getOwnInfo")
    @ResponseBody
    public List<OwnerInfoView> getOwnerInfos(HttpSession session){
        Object username = session.getAttribute(USERNAME);
        return ownerService.getOwnerInfoViewListByAdminUsername((String) username);
    }

    /**
     * 获得单个业主信息
     * @param session
     * @return
     */
    @RequestMapping("/info")
    @ResponseBody
    public OwnerInfoView getOwnerInfo(HttpSession session){
        Object username = session.getAttribute(USERNAME);
        return ownerService.getOwnerInfoViewByUsername((String)username);
    }

}
