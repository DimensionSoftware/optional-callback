.. optional-callback documentation master file, created by
   sphinx-quickstart on Mon Oct 24 06:13:03 2016.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

optional-callback
=============================================

optionalCallback(fn, self) ⇒ function
-------------------------------------

Transform a Promise-returning function into a function that can
optionally take a callback as the last parameter instead.

| **Kind**: global function
| **Returns**: function - a function that can take callbacks as well.

+---------+------------+---------------------------------------------------+
| Param   | Type       | Description                                       |
+=========+============+===================================================+
| fn      | function   | a function that returns a Promise                 |
+---------+------------+---------------------------------------------------+
| self    | Object     | (optional) ``this`` to be used when applying fn   |
+---------+------------+---------------------------------------------------+
