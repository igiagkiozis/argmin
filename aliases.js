var ALIASES = {};
ALIASES['argmin'] = {"/=":[{'crate':'argmin','ty':8,'name':'DivAssign','desc':'The division assignment operator `/=`.','p':'argmin::prelude::failure::_core::ops'}],"*":[{'crate':'argmin','ty':8,'name':'MulAssign','desc':'The multiplication assignment operator `*=`.','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':8,'name':'Mul','desc':'The multiplication operator `*`.','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':8,'name':'Deref','desc':'Used for immutable dereferencing operations, like `*v`.','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':8,'name':'DerefMut','desc':'Used for mutable dereferencing operations, like in `*v = 1;`.','p':'argmin::prelude::failure::_core::ops'}],"..=":[{'crate':'argmin','ty':3,'name':'RangeToInclusive','desc':'A range only bounded inclusively above (`..=end`).','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':3,'name':'RangeInclusive','desc':'A range bounded inclusively below and above (`start..=end`).','p':'argmin::prelude::failure::_core::ops'}],">=":[{'crate':'argmin','ty':8,'name':'PartialOrd','desc':'Trait for values that can be compared for a sort-order.','p':'argmin::prelude::failure::_core::prelude::v1'},{'crate':'argmin','ty':8,'name':'Ord','desc':'Trait for types that form a total order.','p':'argmin::prelude::failure::_core::prelude::v1'}],"^=":[{'crate':'argmin','ty':8,'name':'BitXorAssign','desc':'The bitwise XOR assignment operator `^=`.','p':'argmin::prelude::failure::_core::ops'}],">":[{'crate':'argmin','ty':8,'name':'PartialOrd','desc':'Trait for values that can be compared for a sort-order.','p':'argmin::prelude::failure::_core::prelude::v1'},{'crate':'argmin','ty':8,'name':'Ord','desc':'Trait for types that form a total order.','p':'argmin::prelude::failure::_core::prelude::v1'}],"<=":[{'crate':'argmin','ty':8,'name':'PartialOrd','desc':'Trait for values that can be compared for a sort-order.','p':'argmin::prelude::failure::_core::prelude::v1'},{'crate':'argmin','ty':8,'name':'Ord','desc':'Trait for types that form a total order.','p':'argmin::prelude::failure::_core::prelude::v1'}],"&=":[{'crate':'argmin','ty':8,'name':'BitAndAssign','desc':'The bitwise AND assignment operator `&=`.','p':'argmin::prelude::failure::_core::ops'}],"^":[{'crate':'argmin','ty':8,'name':'BitXor','desc':'The bitwise XOR operator `^`.','p':'argmin::prelude::failure::_core::ops'}],"[]":[{'crate':'argmin','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in mutable contexts.','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in immutable contexts.','p':'argmin::prelude::failure::_core::ops'}],">>=":[{'crate':'argmin','ty':8,'name':'ShrAssign','desc':'The right shift assignment operator `>>=`.','p':'argmin::prelude::failure::_core::ops'}],"+":[{'crate':'argmin','ty':8,'name':'AddAssign','desc':'The addition assignment operator `+=`.','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':8,'name':'Add','desc':'The addition operator `+`.','p':'argmin::prelude::failure::_core::ops'}],"%":[{'crate':'argmin','ty':8,'name':'Rem','desc':'The remainder operator `%`.','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':8,'name':'RemAssign','desc':'The remainder assignment operator `%=`.','p':'argmin::prelude::failure::_core::ops'}],"/":[{'crate':'argmin','ty':8,'name':'Div','desc':'The division operator `/`.','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':8,'name':'DivAssign','desc':'The division assignment operator `/=`.','p':'argmin::prelude::failure::_core::ops'}],"[":[{'crate':'argmin','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in mutable contexts.','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in immutable contexts.','p':'argmin::prelude::failure::_core::ops'}],"..":[{'crate':'argmin','ty':3,'name':'RangeTo','desc':'A range only bounded exclusively above (`..end`).','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':3,'name':'RangeFull','desc':'An unbounded range (`..`).','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':3,'name':'RangeFrom','desc':'A range only bounded inclusively below (`start..`).','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':3,'name':'Range','desc':'A (half-open) range bounded inclusively below and exclusively above (`start..end`).','p':'argmin::prelude::failure::_core::ops'}],"<<":[{'crate':'argmin','ty':8,'name':'Shl','desc':'The left shift operator `<<`. Note that because this trait is implemented for all integer types with multiple right-hand-side types, Rust\'s type checker has special handling for `_ << _`, setting the result type for integer operations to the type of the left-hand-side operand. This means that though `a << b` and `a.shl(b)` are one and the same from an evaluation standpoint, they are different when it comes to type inference.','p':'argmin::prelude::failure::_core::ops'}],"{}":[{'crate':'argmin','ty':8,'name':'Display','desc':'Format trait for an empty format, `{}`.','p':'argmin::prelude::failure::_core::fmt'}],"<":[{'crate':'argmin','ty':8,'name':'PartialOrd','desc':'Trait for values that can be compared for a sort-order.','p':'argmin::prelude::failure::_core::prelude::v1'},{'crate':'argmin','ty':8,'name':'Ord','desc':'Trait for types that form a total order.','p':'argmin::prelude::failure::_core::prelude::v1'}],"*=":[{'crate':'argmin','ty':8,'name':'MulAssign','desc':'The multiplication assignment operator `*=`.','p':'argmin::prelude::failure::_core::ops'}],"&":[{'crate':'argmin','ty':8,'name':'BitAnd','desc':'The bitwise AND operator `&`.','p':'argmin::prelude::failure::_core::ops'}],"|=":[{'crate':'argmin','ty':8,'name':'BitOrAssign','desc':'The bitwise OR assignment operator `|=`.','p':'argmin::prelude::failure::_core::ops'}],"|":[{'crate':'argmin','ty':8,'name':'BitOr','desc':'The bitwise OR operator `|`.','p':'argmin::prelude::failure::_core::ops'}],"&*":[{'crate':'argmin','ty':8,'name':'Deref','desc':'Used for immutable dereferencing operations, like `*v`.','p':'argmin::prelude::failure::_core::ops'}],">>":[{'crate':'argmin','ty':8,'name':'Shr','desc':'The right shift operator `>>`. Note that because this trait is implemented for all integer types with multiple right-hand-side types, Rust\'s type checker has special handling for `_ >> _`, setting the result type for integer operations to the type of the left-hand-side operand. This means that though `a >> b` and `a.shr(b)` are one and the same from an evaluation standpoint, they are different when it comes to type inference.','p':'argmin::prelude::failure::_core::ops'}],"?":[{'crate':'argmin','ty':8,'name':'Try','desc':'A trait for customizing the behavior of the `?` operator.','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':14,'name':'try','desc':'Helper macro for reducing boilerplate code for matching `Result` together with converting downstream errors.','p':'argmin::prelude::failure::_core'}],"-=":[{'crate':'argmin','ty':8,'name':'SubAssign','desc':'The subtraction assignment operator `-=`.','p':'argmin::prelude::failure::_core::ops'}],"==":[{'crate':'argmin','ty':8,'name':'Eq','desc':'Trait for equality comparisons which are equivalence relations.','p':'argmin::prelude::failure::_core::prelude::v1'},{'crate':'argmin','ty':8,'name':'PartialEq','desc':'Trait for equality comparisons which are partial equivalence relations.','p':'argmin::prelude::failure::_core::prelude::v1'}],"!=":[{'crate':'argmin','ty':8,'name':'Eq','desc':'Trait for equality comparisons which are equivalence relations.','p':'argmin::prelude::failure::_core::prelude::v1'},{'crate':'argmin','ty':8,'name':'PartialEq','desc':'Trait for equality comparisons which are partial equivalence relations.','p':'argmin::prelude::failure::_core::prelude::v1'}],"-":[{'crate':'argmin','ty':8,'name':'Neg','desc':'The unary negation operator `-`.','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':8,'name':'SubAssign','desc':'The subtraction assignment operator `-=`.','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':8,'name':'Sub','desc':'The subtraction operator `-`.','p':'argmin::prelude::failure::_core::ops'}],"+=":[{'crate':'argmin','ty':8,'name':'AddAssign','desc':'The addition assignment operator `+=`.','p':'argmin::prelude::failure::_core::ops'}],"%=":[{'crate':'argmin','ty':8,'name':'RemAssign','desc':'The remainder assignment operator `%=`.','p':'argmin::prelude::failure::_core::ops'}],"<<=":[{'crate':'argmin','ty':8,'name':'ShlAssign','desc':'The left shift assignment operator `<<=`.','p':'argmin::prelude::failure::_core::ops'}],"{:?}":[{'crate':'argmin','ty':8,'name':'Debug','desc':'`?` formatting.','p':'argmin::prelude::failure::_core::fmt'}],"]":[{'crate':'argmin','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in mutable contexts.','p':'argmin::prelude::failure::_core::ops'},{'crate':'argmin','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in immutable contexts.','p':'argmin::prelude::failure::_core::ops'}],};
