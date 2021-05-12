import { EntityRepository, Repository } from "typeorm";
import SurveryUser from "../models/SurveryUser";

@EntityRepository(SurveryUser)
class SurverysUsersRepository extends Repository<SurveryUser> {

}

export default SurverysUsersRepository;