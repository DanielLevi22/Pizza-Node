import { Router } from "express";
import { CreateUserController } from "../controller/user/CreateUserController";
import { AuthUserController } from "../controller/user/AuthUserController";
import { DetailUserController } from "../controller/user/DetailUserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateCategoryController } from "../controller/category/CreateCategoryController";
import { ListCategoryController } from "../controller/category/ListCategoryController";
import { CreateProductController } from "../controller/product/CreateProductController";
import uploadConfig from '../config/multer'
import multer from "multer";
import { ListByCategoryController } from "../controller/product/ListByCategoryController";
import { CreateOrderController } from "../controller/order/CreateOrderController";
import { DeleteOrderController } from "../controller/order/DeleteOrderController";
import { AddItemController } from "../controller/order/AddItemController";
import { DeleteItemController } from "../controller/order/DeleteItemController";
import { SendOrderController } from "../controller/order/SendOrderController";
import { ListOrdersController } from "../controller/order/ListOrdersController";
import { DetailOrderController } from "../controller/order/DetailOrderController";
import { FinishOrderController } from "../controller/order/FinishOrderController";


const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))


router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.post('/me', isAuthenticated,new DetailUserController().handle)


router.post('/category', isAuthenticated,new CreateCategoryController().handle)
router.get('/category', isAuthenticated,new ListCategoryController().handle)


router.post('/product', isAuthenticated,upload.single('file'),new CreateProductController().handle)
router.get('/category/product', isAuthenticated,new ListByCategoryController().handle)


router.post('/order', isAuthenticated,new CreateOrderController().handle)
router.delete('/order', isAuthenticated,new DeleteOrderController().handle)

router.post('/order/add', isAuthenticated,new AddItemController().handle)
router.delete('/order/delete', isAuthenticated,new DeleteItemController().handle)

router.put('/order/send', isAuthenticated,new SendOrderController().handle)
router.get('/orders', isAuthenticated,new ListOrdersController().handle)
router.get('/order/detail', isAuthenticated,new DetailOrderController().handle)

router.post('/order/finish', isAuthenticated,new FinishOrderController().handle)















export { router }