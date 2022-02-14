// import the images for the pieces

// for the dark pieces
import bd from './bd.svg' //bishop
import kd from './kd.svg' //king
import qd from './qd.svg' //queen
import rd from './rd.svg' //rook
import pd from './pd.svg' //pawn
import nd from './nd.svg' //knight

// for the light pieces
import bl from './bl.svg' //bishop
import kl from './kl.svg' //king
import ql from './ql.svg' //queen
import rl from './rl.svg' //rook
import pl from './pl.svg' //pawn
import nl from './nl.svg' //knight


// how the board is set up
let boardSetUp = 
[ 
[ [rd], [nd], [bd], [kd], [qd], [bd], [nd], [rd] ],
[ [pd], [pd], [pd], [pd], [pd], [pd], [pd], [pd] ],
[ [""], [""], [""], [""], [""], [""], [""], [""] ],
[ [""], [""], [""], [""], [""], [""], [""], [""] ],
[ [""], [""], [""], [""], [""], [""], [""], [""] ],
[ [""], [""], [""], [""], [""], [""], [""], [""] ],
[ [pl], [pl], [pl], [pl], [pl], [pl], [pl], [pl] ],
[ [rl], [nl], [bl], [kl], [ql], [bl], [nl], [rl] ],
]


//export all the images
export { bd, kd, qd, rd, pd, nd, bl, kl, ql, rl, pl, nl }
// export board
export { boardSetUp }
