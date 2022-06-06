import { AiFillHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaSignInAlt } from 'react-icons/fa'
import { SiYourtraveldottv } from 'react-icons/si'
const people = [
  {
    id: 1,
    name: 'Bertie Yates',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 2,
    name: 'Hester Hogan',
    age: 32,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  },
  {
    id: 3,
    name: 'Larry Little',
    age: 36,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  },
  {
    id: 4,
    name: 'Sean Walsh',
    age: 34,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  },
  {
    id: 5,
    name: 'Lola Gardner',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  },
]

// Menu Data

const menu = [
  {
    id: 1,
    path: '/',
    name: 'Home',
    icon: <AiFillHome />,
  },
  {
    id: 2,
    path: '/login',
    name: 'Login',
    icon: <FaSignInAlt />,
  },
  {
    id: 3,
    path: '/travel',
    name: 'Bookings',
    icon: <SiYourtraveldottv />,
  },
  {
    id: 4,
    path: '/cart',
    name: 'Cart',
    icon: <AiOutlineShoppingCart />,
  },
]

export { people, menu }
